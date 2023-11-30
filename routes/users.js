const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User, validate } = require("../models/user");
const auth = require("../middleware/authorization");

router.get("/:id", auth, async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) return res.status(400).send("User id is not valid!");
  const { _id, name, email } = user;
  res.status(200).json({ _id, name, email });
});

router.get("/", auth, async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered!");

  const salt = await bcrypt.genSalt(8);
  const password = await bcrypt.hash(req.body.password, salt);

  user = await new User({
    name: req.body.name,
    email: req.body.email,
    password,
  }).save();

  const { _id, name, email } = user;
  res.status(201).json({ _id, name, email });
});

module.exports = router;
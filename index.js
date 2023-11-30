const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const users = require("./routes/users");
const auth = require("./routes/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", users);
app.use("/api/auth", auth);

app.listen(port, () => console.log(`App listen on port ${port}!`));
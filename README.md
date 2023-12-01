# User Management System

## Setting Up Environment Variables

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/ADCdananjaya/user-management-system.git 
    cd user-management-system 
    ```

2. **Create a `.env` File:**

    Create a `.env` file in the root directory of the project.

3. **Add Environment Variables:**

    Inside the `.env` file, add the following key-value pairs:

    ```plaintext
    PORT=3000
    DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.1d0glps.mongodb.net/ums?retryWrites=true&w=majority
    JWT_PRIVATE_KEY=2ks82
    ```

    Replace `<username>` and `<password>` in the `DB_CONNECTION` variable with your actual MongoDB username and password.

4. **Save the `.env` File:**

    Save the changes made to the `.env` file.

5. **Run the Application:**

    Once the environment variables are set up, run the following command to start the Node.js backend:

    ```bash
    npm install     # Install project dependencies (if you haven't already)
    npm run start   # Start the Node.js backend
    ```

    This will start the application using the specified environment variables.

    **Note:** Ensure Node.js and npm are installed on your system before running the commands.
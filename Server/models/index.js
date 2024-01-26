const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { registerUser, loginUser, logoutUser } = require("./user");


dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send({
        message: "Hello Developers!",
        secret: process.env.NOT_SO_SECRET,
    });
});

app.post("/register", express.json(), async (req, res) => {
    try {
        const { username, password } = req.body;
        const userId = await registerUser(username, password);
        res.send({
            message: "User registered successfully!",
            userId,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error registering user!",
            error: err.message,
        });
    }
});

app.post("/login", express.json(), async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const token = await loginUser(username, password);
        res.send({
            message: "User logged in successfully!",
            token,
        });
    } catch (err) {
        res.status(400).send({
            message: "Error logging in user!",
            error: err.message,
        });
    }
});

app.post("/logout", express.json(), async (req, res) => {
    try {
        const { token } = req.body;
        await logoutUser(token);
        res.send({
            message: "User logged out successfully!",
        });
    } catch (err) {
        res.status(400).send({
            message: "Error logging out user!",
            error: err.message,
        });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

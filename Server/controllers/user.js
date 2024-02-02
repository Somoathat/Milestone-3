const router = require("express").Router();
const { registerUser, loginUser, logoutUser } = require("../models/user");

router.post("/register",  async (req, res) => {
    try {
        const { username, password,email } = req.body;
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

router.post("/login",  async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);
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

router.post("/logout",  async (req, res) => {
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


module.exports = router
const { Router } = require("express");

const express = require("express");

const User = require("../models/repository/user");

const router = express.Router();

router.post("/registro", async (req, res) => {
    const { email } = req.body;

    try {

        if (await User.findOne({ email }))
            return res.status(400).send({ error: "User Already Exists" });


        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user })

    } catch (err) {
        return res.status(400).send({ error: "Registration failed" });
    }
});

module.exports = app => app.use("/auth", router);
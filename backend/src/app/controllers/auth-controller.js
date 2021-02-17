const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

const authConfig = require("../../config/auth.json");
const User = require("../models/repository/user");
const Admin = require("../models/repository/admin");

const router = express.Router();


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.get("/moradores", async (req, res) => {
    try {                   // Usando o comando find() do mongoDB
        const moradores = await User.find();

        return res.send(moradores);
    } catch (err) {
        return res.status(400).json({ error: 'Error loading Moradores' });
    }
})

router.post("/register", async (req, res) => {
    const { email } = req.body;

    try {

        if (await User.findOne({ email }))
            return res.status(400).json({ error: "User Already Exists" });


        const user = await User.create(req.body);



        return res.json({
            user,
            token: generateToken({ id: user.id }),
        });

    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "Registration failed" });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).json({ error: "User not found" });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).json({ error: 'Invalid password' });

    user.password = undefined;

    res.json({
        user,
        token: generateToken({ id: user.id }),

    });

});

router.post('/forgot_password', async (req, res) => {
    const { email } = req.body;
    // token salvo em user.js
    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).json({ error: 'User not found' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set': {
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        }, { new: true, useFindAndModify: false }
        );
        await mailer.sendMail({
            to: email,
            from: 'recodeprosquad9@gmail.com',
            subject: "Assunto do email",
            context: { token },
            template: 'auth/forgot_password',
        }, (err) => {
            if (err)

                return res.status(400).json({ error: 'Cannot send forgot password email' });

            return res.json();
        });

    } catch (err) {
        res.status(400).json({ error: 'Erro on forgot password, try again' });
    }

});

router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ email })
            .select('+passwordResetToken passwordResetExpires');

        if (!user)
            return res.status(400).json({ error: 'User not found' });

        if (token !== user.passwordResetToken)
            return res.status(400).json({ error: 'Token invalid' });

        const now = new Date();

        if (now > user.passwordResetExpires)
            return res.status(400).json({ error: 'Token expired, generate a new one!' });

        user.password = password;

        await user.save();

        res.json();

    } catch (err) {
        res.status(400).json({ error: 'Cannot reset password, try again!' });
    }

});

router.post("/registerAdmin", async (req, res) => {
    const { email } = req.body;

    try {
        if (await Admin.findOne({ email }))
            return res.status(400).json({ error: "Admin Already Exists" });

        const admin = await Admin.create(req.body);

        return res.json({
            admin,
            token: generateToken({ id: admin.id }),
        });

    } catch (err) {
        return res.status(400).json({ error: "Registration failed" });
    }
});

router.post('/admin', async (req, res) => {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin)
        return res.status(400).json({ error: "Admin not found" });

    if (!await bcrypt.compare(password, admin.password))
        return res.status(400).json({ error: 'Invalid password' });

    admin.password = undefined;

    res.json({
        admin,
        token: generateToken({ id: admin.id }),
    });

});

module.exports = app => app.use("/auth", router);

const router = require("express").Router();
const User = require("../Models/User.js");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt=require("jsonwebtoken");

dotenv.config();
// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString(),
        email: req.body.email,
        isAdmin:req.body.isAdmin,
    });
    try {
        const user = await newUser.save();
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(400).json(error.message);

    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("wrong email");
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SEC_KEY);
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if (req.body.password !== originalPassword) {
            return res.status(401).json("wrong password");
        }
        const accessToken=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SEC_KEY,{expiresIn:"5d"});
        return res.status(200).json({user,accessToken});
    } catch (error) {
        return res.status(500).json(error.message);
    }


})
module.exports = router;
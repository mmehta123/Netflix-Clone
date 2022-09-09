const router=require("express").Router();
const User=require("../Models/User.js");
const CryptoJS=require("crypto-js");
const verify=require("../Middlewares/verifyToken.js");
const dotenv = require("dotenv");
dotenv.config();

// UPDATE
router.put("/:id",verify,async(req,res)=>{
    if(req.user.id===req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SEC_KEY).toString();
        }
        try {
            const updatedUser=await User.findByIdAndUpdate(req.user.id,{$set:req.body},{new:true});
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    }else{
        return res.status(403).json("This account is related to another user.");
    }
});
// DELETE ONE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("user has been deleted");
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    } else {
        return res.status(403).json("This account is related to another user.");
    }
});
// GET ONE
router.get("/find/:id", async (req, res) => {
        try {
            const requiredUser = await User.findById(req.params.id);
            const {password,...info}=requiredUser._doc;
            return res.status(200).json(info);
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    
});
// GET ALL
router.get("/", verify, async (req, res) => {
    const query=req.query.new;
    if (req.user.isAdmin) {
        try {
            const allusers=query ? await User.find().sort({_id:-1}).limit(2) : await User.find();
            return res.status(200).json(allusers);
        } catch (error) {
            return res.status(500).json("something went wrong");
        }
    } else {
        return res.status(403).json("You are not authorized");;
    }
});
// GET ALL STATS
router.get("/stats",async(req, res) => {
    const today=new Date();
    const lastYear=today.setFullYear(today.setFullYear()-1);
    try{
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    }catch(error){    
        res.status(500).json(error);
    }
});


module.exports=router;
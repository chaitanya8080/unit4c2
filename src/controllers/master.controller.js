const express = require("express");

const User = require("../modules/master.module");

const router = express.Router();

router.get("",async (req,res) =>{
    try {
        const users = await User.find().lean().exec();
        return res.send(users);
    } catch (error) {
      return res.send("error : ",error);
    }
});

router.get("/:id",async (req,res) =>{
    try {
        const oneusers = await User.findById(req.params.id).lean().exec();
        return res.send(oneusers);
    } catch (error) {
      return res.send("error : ",error);
    }
});

router.post("",async (req,res) =>{
    try {
        const post = await User.create(req.body);
        return res.send(post);
    } catch (error) {
      return res.send("error : ",error);
    }
});

router.patch("/:id",async (req,res) =>{
    try {
        const patch = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.send(patch);
    } catch (error) {
      return res.send("error : ",error);
    }
});
router.delete("",async (req,res) =>{
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id,req.body,{new:true});
        return res.send(deleteuser);
    } catch (error) {
      return res.send("error : ",error);
    }
});

module.exports = router;


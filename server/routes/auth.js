const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const User= mongoose.model("User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../key');
const requireLogin = require('../middleware/requireLogin');

router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello");
})

router.post('/signup',(req,res)=>{
    const{name,email,password} = req.body;
    if(!email||!password||!name){
        return res.status(422).json({error:"Please add all fields"});
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User Already Exists"});
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
        const user = new User({
            email,
            password:hashedpassword,
            name
        })

        user.save().then(user=>{
            res.json({message:"Successfully Saved"});
        })
        .catch(err=>{
            console.log(err);
        })

        })
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"Please add Email and Password"});  
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email and Password"});
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //Successfully Signed In
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET);
                res.json({token});
            }
            else{
                return res.status(422).json({error:"Invalid Email and Password"});
            }
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router;
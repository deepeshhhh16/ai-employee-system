const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.signup = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user =
        await User.create({
            email,
            password:hashedPassword
        });

        res.json({
            message:"Signup Successful",
            user
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};

exports.login = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user =
        await User.findOne({email});

        if(!user){

            return res.status(400).json({
                message:"User not found"
            });

        }

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){

            return res.status(400).json({
                message:"Invalid Password"
            });

        }

        const token = jwt.sign(

            {id:user._id},

            process.env.JWT_SECRET

        );

        res.json({
            message:"Login Successful",
            token
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};
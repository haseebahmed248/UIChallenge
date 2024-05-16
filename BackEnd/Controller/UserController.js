import User from '../Model/Users.js';
import  jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req,res)=>{
    try{
        const encryptedPassword = await bcrypt.hash(req.body.password,10);
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:encryptedPassword
        });
        await user.save();
        res.json("User SignedUp Successfully");
    }catch(e){
        res.status(500).json({error: "error signing Up", details: e});
    }
}

export const login = async(req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        })
        if(!user){
            res.status(400).json("User not found");
        } else {
            const match = await bcrypt.compare(req.body.password, user.password);
            jsonwebtoken.sign({user},process.env.SECRET,{expiresIn:"5min"},(err,token)=>{
                if(err){
                    res.status(400).json({err});
                }
                res.cookie("token",token);
                res.json({user,auth:token});
            })
        }
    }catch(e){
        res.status(500).json({error: "error logging in", details: e});
    }
}

export const home = (req,res)=>{
    return res.json("Success");
}

export const logout = (req,res)=>{
    res.clearCookie("token");
    return res.json("Logged Out");
}

export const users = async(req,res)=>{
    try{
        const data = await User.find();
        res.json(data);
    }catch(e){
        res.status(500).json({error: "error fetching data", details: e});
    }
}
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {exportUser} from "../models/User.js";

const {User}=exportUser;

const registerUser=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const userExists=await  User.findOne({email});
        if(userExists) return res.status(400).json({message :"User already exists"});

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({name,email,hashedPassword:password});
        res.status(201).json({message:"User registered successfully"});
    }catch(error){
        res.status(500).json({message:"Something went wrong"});
    }
};

//login user

const loginUser=async (req,res)=> {
    const {email,password}=req.body;
    try{  
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid Credentials"});
 
        const isMatch=await bcrypt.compare(password,hashedPassword);
        if(!isMatch) return res.status(400).json({message:"Invalid Credentials"});

        const token=jwt.sign({id:user_.id},process.env.JWT_SECRET,{expiresIn:"1hr"});
        res.status(200).json({token});

    }catch(error){
        res.status(500).json({message:"Something went wrong"});
    }
};

const exportController={registerUser,loginUser};
export {exportUserController};

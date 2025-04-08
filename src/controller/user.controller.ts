import { Request, Response } from "express";
import {User} from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req :Request, res:Response):Promise<void> => {
    const {userName, email, password, fullName} = req.body;
    
    if(!userName || !email || !password || !fullName) {
         res.status(400).json({message: "All fields are required"});
         return
    }
    try{
        const existingUser = await User.findOne({email});
        if(existingUser) {
             res.status(400).json({message: "User already exists"});
            return
        }
        const hastpssword = await bcrypt.hash(password, 10);
        const newUser = {
            userName: userName.trim(),
            email : email.trim(),
            password : hastpssword,
            fullName :fullName.trim(),
        }
        const user = await User.create(newUser);
         res.status(200).json({message: "User created successfully", user});
         return
    }catch(err){
        console.error(err);
         res.status(500).json({message: "Internal server error"});
         return
    }    
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    try {
        if(!id) {
            res.status(400).json({message: "User ID is required"});
            return
        }
        const userData = await User.findById(id);
        if(!userData) {
            res.status(404).json({message: "User not found"});
            return
        }
        res.status(200).json({ 
            message: "User found",
            data: {
                userName: userData.userName,
                email: userData.email,
                fullName: userData.fullName,
            } });
        return
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
        return
    }

}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
const {id} = req.params;
try {
    if(!id) {
        res.status(400).json({message: "User ID is required"});
        return
    }
    const userDeleted = await User.findByIdAndDelete(id);
    if(!userDeleted) {
        res.status(404).json({message: "User not found"});
        return
    }
    res.status(200).json({message: "User deleted successfully"});
    return
} catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error"});
    return    
}
}
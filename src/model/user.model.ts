import mongoose from "mongoose";
import type {IUser} from "../types/index.js"

const userSchema = new mongoose.Schema<IUser>({
    userName : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fullName : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password : {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

export const User = mongoose.model<IUser>("User", userSchema)
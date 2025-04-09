import {z} from 'zod';

export const userSchema = z.object({
    userName : z.string().trim().min(3),
    fullName : z.string().trim().min(3),
    email : z.string().email().trim(),
    password : z.string().min(6)
})
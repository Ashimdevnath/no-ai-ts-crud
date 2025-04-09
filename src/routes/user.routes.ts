import { Router } from 'express';
import { createUser, getUser,deleteUser,updateUser } from '../controller/user.controller.js';
import { validateData } from '../middleware/userValidastion.middleware.js';
import { userSchema } from '../validation/user.validastion.js';
const userRouter = Router();

userRouter.post('/user',validateData(userSchema), createUser);
userRouter.get('/user/:id', getUser);
userRouter.delete('/user/:id', deleteUser);
userRouter.put('/user/:id',updateUser);

export default userRouter;
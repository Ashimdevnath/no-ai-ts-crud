import { Router } from 'express';
import { createUser, getUser,deleteUser } from '../controller/user.controller.js';

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user/:id', getUser);
userRouter.delete('/user/:id', deleteUser);

export default userRouter;
import express from 'express';
import {connectMongoDB} from './config/db.mongodb.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());
connectMongoDB();    

app.use('/api/v1', userRouter);
export default app;


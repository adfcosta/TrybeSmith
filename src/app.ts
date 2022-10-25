import express from 'express';
import 'express-async-errors';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);

export default app;

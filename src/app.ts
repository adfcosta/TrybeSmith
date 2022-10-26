import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/errorMiddleware';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import loginRouter from './routers/LoginRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(loginRouter);
app.use(httpErrorMiddleware);

export default app;

import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/errorMiddleware';
import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';
import loginRouter from './routers/LoginRouter';
import orderRouter from './routers/OrderRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(userRouter);
app.use(loginRouter);
app.use(orderRouter);
app.use(httpErrorMiddleware);

export default app;

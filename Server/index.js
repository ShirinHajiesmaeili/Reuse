import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import './db/dbConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/authRouter.js';

const app = express();
const port = 3000;

//Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRouter);
app.use("/cart", cartRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`The server is running on port:${port}`));

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import categoryRouter from './routers/categoryRouter.js';
import './db/dbConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/authRouter.js';
import cartRouter from './routers/cartRouter.js';

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  credentials: true,
 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/categories', categoryRouter);
app.use('/auth', authRouter);
app.use("/cart", cartRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});


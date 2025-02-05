import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import categoryRouter from "./routers/categoryRouter.js";
import connectDB from "./db/dbConnection.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./routers/authRouter.js";
import cartRouter from "./routers/cartRouter.js";
import zipcodesRouter from "./routers/zipcodesRouter.js";
import ErrorResponse from "./utils/ErrorResponse.js";

connectDB();

const app = express();

const port = process.env.PORT || 3000;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
const env = process.env.NODE_ENV || "prod";

/* Middleware */
app.use(
  cors({
    origin: corsOrigin, // Frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Routes */
app.use("/categories", categoryRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/zipcodes", zipcodesRouter);

/* Error handling middleware */
app.use((err, req, res, next) => {
  console.error(err);
  next(new ErrorResponse(`Route ${req.originalUrl} not found`, 404));
});

app.use((err, req, res, next) => {
  console.error(err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (env !== "prod") {
    res.status(statusCode).json({
      success: false,
      message,
      stack: err.stack,
    });
  } else {
    res.status(statusCode).json({
      success: false,
      message,
    });
  }
});

app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import categoryRouter from "./routers/categoryRouter.js";
import connectDB from "./db/dbConnection.js";
import productRouter from "./routers/productRouter.js";
import authRouter from "./routers/authRouter.js";
import cartRouter from "./routers/cartRouter.js";
import zipcodesRouter from "./routers/zipcodesRouter.js";
import ErrorResponse from "./utils/ErrorResponse.js";

connectDB();

const app = express();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "production";
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";

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
app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/zipcodes", zipcodesRouter);
app.use("/*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* Error handling middleware */
app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (env !== "production") {
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

app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
  } else {
    console.log(`Server running on http://localhost:${port}`);
  }
});

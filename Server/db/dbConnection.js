import mongoose from "mongoose";
import ErrorResponse from "../utils/ErrorResponse.js";

/* 
Remember to add a .env file with your MongoDB Connection string. 
Also update the 'dev' script to include the .env file 
*/
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    new ErrorResponse("Database connection error\nError No #382615", 400);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
  }
};

export default connectDB;

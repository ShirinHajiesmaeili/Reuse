import mongoose from "mongoose";

/* 
Remember to add a .env file with your MongoDB Connection string. 
Also update the 'dev' script to include the .env file 
*/
const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGO_URI ||
    "mongodb+srv://admin:vbcUe6_X3KgjUwL@cluster0.tx97f.mongodb.net/reuse";

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
  }
};

export default connectDB;

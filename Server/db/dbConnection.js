import mongoose from 'mongoose';

// Remember to add a .env file with your MongoDB Connection string. Also update the 'dev' script to include the .env file
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to DB');
} catch (error) {
  console.error('Failed to connect to DB');
}

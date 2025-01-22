import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Pls enter a first name'],
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    minLength: 8,
    required: true,
    select: false,
  },
});

const User = model('user', userSchema);

export default User;

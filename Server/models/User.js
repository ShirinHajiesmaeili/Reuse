import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false
  },
  location: {
    postalCode: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    }
  },
  customerExperience: {
    type: [Number],
    enum: [1, 2, 3, 4, 5]
  }
}, { timestamps: true });

const User = model('User', userSchema);

export default User;

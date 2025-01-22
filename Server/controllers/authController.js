import User from '../models/User.js';
import bcrypt from 'bcrypt';
import asyncHandler from '../utils/asyncHandler.js';

export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, isAdmin, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    age,
    isAdmin,
    password: hashedPassword,
  });

  res.send(newUser);
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error('Password is incorrect');

  res.send(user);
});

export const signOut = (req, res) => {
  // signOut logic here
};

export const getUser = (req, res) => {};

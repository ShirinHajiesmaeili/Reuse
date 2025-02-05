import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/User.js";

/* Create a new User Account */
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

  // TODO: Should we verify eMail existence
  // TODO: Login new User automatically or refere SignIp page

  res.send(newUser);
});

/* Login as existing User */
export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //console.log(password);

  /* Verify User Credentials */
  const user = await User.findOne({ email }).select("+password");
  if (!user)
    throw new Error(
      "The Username or Password is Incorrect. Try again. \n Error: #13455"
    );

  /* Is password correct? */
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    throw new Error(
      "The Username or Password is Incorrect. Try again. \n Error: #13456"
    );

  /* Object containig the current connected user */
  const signedInUser = {
    name: user.firstName,
    email: user.email,
  };
  //console.log(user.firstname);

  /* Create new Token for connected user */
  const token = jwt.sign(signedInUser, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  //console.log token

  /* Accept Cookie transfer using HTTP (Yeah/noop) */
  const isProd = process.env.NODE_ENV === "prod";
  const cookieOptions = {
    httpOnly: true,
    sameSite: isProd ? "None" : "Lax",
    secure: isProd,
  };

  /* Create cookie on user browser and prepare userContext on frontend */
  res.cookie("token", token, cookieOptions).send(signedInUser);

  /* Send token to frontend if needed */
  res.send(token);
});

/* Logout of application */
export const signOut = (req, res) => {
  // TODO: logic is missing
};

export const getUser = asyncHandler(async (req, res) => {
  //console.log(req.userEmail);

  const user = await User.findOne({ email: req.userEmail });
  // TODO: logic is missing

  res.send.user;
});

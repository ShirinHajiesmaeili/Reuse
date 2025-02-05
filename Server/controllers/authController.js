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
    location,
    customerExperience,
  });

  // TODO: Need additional security checks or user roles (e.g. admin checks)
  // TODO: Should we verify eMail existence
  // TODO: Login new User automatically or refere SignIp page

  //res.send(newUser);
  res.status(201).json({
    success: true,
    data: {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    },
  });
});

/* Login as existing User */
export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //console.log(password);

  const SECRET = process.env.JWT_SECRET || "b0cf624f19fbaec2a52d";
  /* Verify User Credentials */
  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return next(
      new ErrorResponse(
        "The Username or Password is Incorrect. Try again. \n Error: #13455",
        401
      )
    );

  /* Is password correct? */
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(
      new ErrorResponse(
        "The Username or Password is Incorrect. Try again. \n Error: #13456",
        401
      )
    );

  /* Object containig the current connected user */
  const signedInUser = {
    id: user._id,
    name: user.firstName,
    email: user.email,
  };
  //console.log(user.firstname);

  /* Create new Token for connected user */
  const token = jwt.sign(signedInUser, SECRET, {
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
  res.cookie("token", token, cookieOptions).status(200).send(signedInUser);

  /* Send token to frontend if needed */
  res.send(token);
});

/* Logout of application */
export const signOut = (req, res) => {
  // remove Cookie with token
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "prod" ? "None" : "Lax",
    secure: process.env.NODE_ENV === "prod",
  });

  res.status(200).json({
    success: true,
    message: "You have successfully signed out",
  });
};

/* Get User Information */
export const getUser = asyncHandler(async (req, res, next) => {
  //console.log(req.userEmail);

  const user = await User.findOne({ email: req.user.email }).select(
    "-password"
  );
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }
  //console.log(user);

  //res.send(user);
  res.status(200).json({
    success: true,
    data: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      isAdmin: user.isAdmin,
      location: user.location,
      customerExperience: user.customerExperience,
    },
  });
});

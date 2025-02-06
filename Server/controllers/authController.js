import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import User from "../models/User.js";

/* Create a new User Account (POST /auth/signup) */
export const signUp = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    age,
    isAdmin,
    location,
    customerExperience,
  } = req.body;

  try {
    /* Check if user already exists */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(
        new ErrorResponse("User with this email already exists", 400)
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      isAdmin,
      location,
      customerExperience,
    });

    // TODO: Need additional security checks or user roles (e.g. admin checks)
    // TODO: Should we verify eMail existence

    // Create JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // TODO: Login new User automatically or refere to SignIp page?

    /* Response */
    //res.send(newUser);
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        location: user.location,
        customerExperience: user.customerExperience,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
});

/* Login as existing User (POST /auth/signin) */
export const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const SECRET = process.env.JWT_SECRET || "b0cf624f19fbaec2a52d";
  //console.log(password);
  //console.log(SECRET);

  try {
    /* Verify User */
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
    // TODO: do we need more
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
    console.log(token);

    /* Accept Cookie transfer using HTTP (Yeah/noop) */
    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      sameSite: isProd ? "None" : "Lax",
      secure: isProd,
    };

    /* Create cookie on user browser and prepare userContext on frontend */
    res.cookie("token", token, cookieOptions).status(200).json({
      success: true,
      token,
      signedInUser,
    });
  } catch (error) {
    next(error); // Fehler an Fehler-Handler weitergeben
  }

  /* Send token to frontend if needed */
  //res.send(token);
});

/* Logout of application */
export const signOut = (req, res, next) => {
  /* remove Cookie with token */
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    success: true,
    message: "You have successfully signed out",
  });
};

/* Get User Information (GET /auth/me) */
export const getUser = asyncHandler(async (req, res, next) => {
  //console.log(req.userEmail);

  try {
    const user = await User.findOne({ _id: req.user.id }).select("-password");
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
  } catch (error) {
    next(error);
  }
});

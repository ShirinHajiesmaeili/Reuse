import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import User from "../models/User.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  const SECRET = process.env.JWT_SECRET || "b0cf624f19fbaec2a52d";

  try {
    /* Get token from user browser */
    const { token } = req.cookies;

    if (!token) {
      return next(
        new ErrorResponse("No token found, authorization denied", 401)
      );
    }
    //console.log(token);

    /* Verify token */
    const payload = jwt.verify(token, SECRET);

    if (!payload) {
      return next(
        new Error(
          "You are not logged in. Please log in and try again \n Error: #1038",
          401
        )
      );
    }
    //console.log(payload);

    /* Prepare Account information */
    const user = await User.findOne({ email: payload.email });
    if (!user) {
      return next(
        new ErrorResponse("User associated with this token not found", 404)
      );
    }
    //console.log(user)

    req.user = user;

    /* Pass payload as request object to next container */
    next();
  } catch (error) {
    return next(new ErrorResponse("Invalid or expired token", 401));
  }
});

export default verifyToken;

import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  /* Get token from user browser */
  const { token } = req.cookies;
  //console.log(token);

  /* Verify token */
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  //console.log(payload);
  if (!payload)
    throw new Error(
      "You are not logged in. Please log in and try again \n Error: #1038"
    );

  /* Prepare Account information */
  // TODO: Get User Details from DB
  req.userEmail = payload.email;

  /* Pass payload as request object to next container */
  next();
});

export default verifyToken;

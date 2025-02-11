import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  const SECRET = process.env.JWT_SECRET;
  const { token } = req.cookies;

  const { userID } = jwt.verify(token, SECRET);

  req.userID = userID;

  next();
});

export default verifyToken;

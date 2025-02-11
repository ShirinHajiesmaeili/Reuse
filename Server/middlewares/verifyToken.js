import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  const SECRET = process.env.JWT_SECRET;

  console.log(req.cookies);
  const { token } = req.cookies;

  const { userID } = jwt.verify(token, SECRET);

  req.userID = userID;

  next();
});

export default verifyToken;

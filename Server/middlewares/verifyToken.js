import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  const SECRET = process.env.JWT_SECRET;
  if (!SECRET) {
    return next(
      new ErrorResponse("No token secret found, authorization denied", 401)
    );
  }

  /* Get token */
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token found in Header:", token);
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
    console.log("Token found in Cookie:", token);
  }
  if (!token) {
    return next(new ErrorResponse("No token found, authorization denied", 401));
  }
  //console.log(token);

  /* Verify token and extract payload */
  const { userID } = jwt.verify(token, SECRET);
  if (!userID) {
    return next(
      new Error(
        "You are not logged in. Please log in and try again \n Error: #1038",
        401
      )
    );
  }
  //console.log(userID);

  /* Generate payload as request object */
  req.userid = userID;

  /* Pass payload as request object to next container */
  next();
});

export default verifyToken;

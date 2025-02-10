import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const SECRET = process.env.JWT_SECRET;
  if (!SECRET) {
    return res.status(401).json({ message: "Authentication secret missing" });
  }

  /* Extract tokens from headers */
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    /* Remove bearer if present */
    const actualToken = token.startsWith("Bearer ") ? token.slice(7) : token;

    /* verify token */
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    /* Save user information for further steps  */
    req.user = decoded;

    /* Continue to the next middleware or route */
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticate;

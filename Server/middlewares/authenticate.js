import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  // Token aus den Headern extrahieren
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    // Bearer entfernen, falls vorhanden
    const actualToken = token.startsWith("Bearer ") ? token.slice(7) : token;

    // Token verifizieren
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);

    // Nutzerinformationen für die weiteren Schritte speichern
    req.user = decoded;

    // Weiter zur nächsten Middleware oder Route
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authenticate;

// Router for Cart Endpoints
import express from "express";
const router = express.Router();
import cartController from "../controllers/cartController.js";
import authenticate from "../middleware/authenticate.js"; // Middleware to ensure the user is authenticated

// Get the current cart
router.get("/", authenticate, cartController.getCart);

// Add an item to the cart
router.post("/add", authenticate, cartController.addToCart);

// Remove an item from the cart
router.post("/remove", authenticate, cartController.removeFromCart);

// Clear the cart
router.post("/clear", authenticate, cartController.clearCart);

export default router;

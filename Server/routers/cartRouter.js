// Router for Cart Endpoints
import express from "express";
const router = express.Router();
import cartController from "../controllers/cartController.js";
import authenticate from "../middlewares/authenticate.js"; // Middleware to ensure the user is authenticated

// Get the current cart
router.get("/", cartController.getCart);

// Add an item to the cart
router.post("/add", cartController.addToCart);

// Remove an item from the cart
router.post("/remove", cartController.removeFromCart);

// Clear the cart
router.post("/clear", cartController.clearCart);

// Update cart
// TODO: router.put("/edit", cartController.editCart);

export default router;

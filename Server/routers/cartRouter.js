// Router for Cart Endpoints
import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import cartController from "../controllers/cartController.js";

const cartRouter = Router();

/* Get the current cart */
cartRouter.get("/", cartController.getCart);

/* Add an item to the cart */
cartRouter.post("/add", cartController.addToCart);

/* Remove an item from the cart */
// TODO: switch to delete
cartRouter.post("/remove", cartController.removeFromCart);

/* Clear the cart */
cartRouter.post("/clear", cartController.clearCart);

// Update cart
// TODO: cartRouter.put("/edit", cartController.editCart);

export default cartRouter;

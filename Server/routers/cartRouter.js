// Router for Cart Endpoints
import { Router } from "express";
//import verifyToken from '.. middlewares/verifytoken.js'; // TODO: Do we need a token here?
import cartController from "../controllers/cartController.js";

const cartRouter = Router();

/* Get the current cart */
cartRouter.get("/", cartController.getCart);

/* Add an item to the cart */
cartRouter.post("/add", cartController.addToCart);

/* Remove an item from the cart */
// TODO: delete("/remove/:id" ...
cartRouter.delete("/remove", cartController.removeFromCart);

/* Clear the cart */
cartRouter.delete("/clear", cartController.clearCart);

// Update cart
// TODO: cartRouter.put("/edit", cartController.editCart);

export default cartRouter;

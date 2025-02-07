import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
  getUser,
  signIn,
  signUp,
  signOut,
} from "../controllers/authController.js";

const authRouter = Router();

/* Get current user */
authRouter.get("/me", verifyToken, getUser);

/* Add a new account */
authRouter.post("/signup", signUp);

/* LogIn */
authRouter.post("/signin", signIn); // TODO: what if someone is already in?

/* LogOut */
authRouter.delete("/signout", verifyToken, signOut);

/* */
// TODO: authRouter.put("/update", update);

export default authRouter;

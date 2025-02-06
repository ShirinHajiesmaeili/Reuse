import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
  getUser,
  signIn,
  signUp,
  signOut,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn); // TODO: what if someone is already in?
authRouter.get("/me", verifyToken, getUser);
authRouter.delete("/signout", verifyToken, signOut);
// TODO: authRouter.put("/update", update);

export default authRouter;

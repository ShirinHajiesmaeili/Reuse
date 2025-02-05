import { Router } from "express";
import {
  getUser,
  signIn,
  signUp,
  signOut,
} from "../controllers/authController.js";
import verifyToken from "../middlewares/verifyToken.js";

const authRouter = Router();
authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.delete("/signout", signOut);
authRouter.get("/me", verifyToken, getUser);

export default authRouter;

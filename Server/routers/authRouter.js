import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
  getUser,
  signIn,
  signUp,
  signOut,
} from "../controllers/authController.js";

const authRouter = Router();

authRouter.get("/me", verifyToken, getUser);
authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.delete("/signout", signOut);

export default authRouter;

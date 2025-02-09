import { Router } from "express";
import { uploadSingle, uploadMultiple } from "../controllers/uploadController.js";
import upload from "../middlewares/multer.js";
import verifyToken from "../middlewares/verifyToken.js";


const uploadRouter = Router();

// Protected routes - require authentication
uploadRouter.post("/single", verifyToken, upload.single("image"), uploadSingle);
uploadRouter.post("/multiple", verifyToken, upload.array("images", 5), uploadMultiple);

export default uploadRouter;
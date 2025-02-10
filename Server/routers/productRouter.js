import express from "express";
import {
  getAllProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { uploadSingle, uploadMultiple } from "../controllers/uploadController.js";
import upload from "../middlewares/multer.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:name", getProductByName);

router.post("/", verifyToken, createProduct);

router.put("/:name", verifyToken, updateProduct);

router.delete("/:name", verifyToken, deleteProduct);

router.post("/upload", verifyToken, upload.single("image"), uploadSingle);

router.post("/upload-multiple", verifyToken, upload.array("images", 5), uploadMultiple);

export default router;



import express from "express";
import {
  getAllProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:name", getProductByName);

router.post("/create", verifyToken, upload.single("image"), createProduct);

router.put("/:name", verifyToken, updateProduct);

router.delete("/:name", verifyToken, deleteProduct);

export default router;

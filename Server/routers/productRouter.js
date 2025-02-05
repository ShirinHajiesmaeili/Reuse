import express from "express";
import {
  getAllProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:name", getProductByName);

router.post("/", createProduct);

router.put("/:name", updateProduct);

router.delete("/:name", deleteProduct);

export default router;

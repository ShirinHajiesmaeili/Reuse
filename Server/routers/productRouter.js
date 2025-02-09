import express from "express";
import {
  getAllProducts,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:name", getProductByName);

router.post("/", createProduct);

router.put("/:name", updateProduct);

router.delete("/:name", deleteProduct);

router.post("/upload", upload.single("image"), uploadProductImage);

router.post("/upload-multiple", upload.array("images", 5), uploadProductImages);


export default router;



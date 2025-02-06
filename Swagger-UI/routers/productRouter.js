import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products (external request)
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res
        .status(500)
        .json({ error: "Serverfehler oder Verbindung fehlgeschlagen" });
    }
  }
});

/**
 * @swagger
 * /products/{name}:
 *   get:
 *     summary: Get product by name (external request)
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the product
 *     responses:
 *       200:
 *         description: Product details
 *       404:
 *         description: Product not found
 */
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`http://localhost:3000/products/${name}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res
        .status(500)
        .json({ error: "Serverfehler oder Verbindung fehlgeschlagen" });
    }
  }
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stockQuantity:
 *                 type: number
 *               isAvailable:
 *                 type: boolean
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/products",
      req.body
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res
        .status(500)
        .json({ error: "Serverfehler oder Verbindung fehlgeschlagen" });
    }
  }
});

export default router;

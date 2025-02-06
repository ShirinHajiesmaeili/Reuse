import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get the current cart for the authenticated user (external request)
 *     responses:
 *       200:
 *         description: The user's cart
 *       404:
 *         description: Cart not found
 */
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
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
 * /cart/add:
 *   post:
 *     summary: Add a product to the cart (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product added to the cart
 *       404:
 *         description: Product or cart not found
 */
router.post("/add", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/cart/add",
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

/**
 * @swagger
 * /cart/remove:
 *   post:
 *     summary: Remove a product from the cart (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product removed from the cart
 */
router.post("/remove", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/cart/remove",
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

/**
 * @swagger
 * /cart/clear:
 *   post:
 *     summary: Clear the user's cart (external request)
 *     responses:
 *       200:
 *         description: Cart cleared successfully
 */
router.post("/clear", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:3000/cart/clear");
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

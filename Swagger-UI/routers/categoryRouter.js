import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories (external request)
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/categories");
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
 * /categories:
 *   post:
 *     summary: Create a new category (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               allCategories:
 *                 type: string
 *               electronics:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.post("/", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/categories",
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
 * /categories/{id}:
 *   get:
 *     summary: Get category by ID (external request)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category details
 *       404:
 *         description: Category not found
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`http://localhost:3000/categories/${id}`);
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

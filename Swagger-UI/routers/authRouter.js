import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get the currently logged-in user's details (external request)
 *     responses:
 *       200:
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 isAdmin:
 *                   type: boolean
 *                 location:
 *                   type: string
 *       401:
 *         description: Unauthorized - user not authenticated
 *       500:
 *         description: Server error
 */
router.get("/me", async (req, res) => {
  try {
    // Sende die Anfrage an den externen Server
    const response = await axios.get("http://localhost:3000/auth/me", {
      headers: {
        Authorization: req.headers.authorization || "",
      },
    });

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
 * /auth/signup:
 *   post:
 *     summary: Create a new user account (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@gmail.com"
 *               password:
 *                 type: string
 *                 example: "pw12345"
 *               age:
 *                 type: integer
 *                 example: 30
 *               isAdmin:
 *                 type: boolean
 *                 example: false
 *               location:
 *                 type: string
 *                 example: "Small planat - Milkyway Orionarm"
 *               customerExperience:
 *                 type: string
 *                 example: "Phantastic seller"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */
router.post("/signup", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      req.body
    );

    // Antwort von localhost:3000 an den Client weiterleiten
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
 * /auth/signin:
 *   post:
 *     summary: Login with existing user credentials (external request)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful, returns token
 *       401:
 *         description: Unauthorized - incorrect credentials
 */
router.post("/signin", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signin",
      req.body
    );

    // Antwort von localhost:3000 an den Client weiterleiten
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

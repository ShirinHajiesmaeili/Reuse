import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /auth/signout:
 *   delete:
 *     summary: Logout the current user (requires token)
 *     security:
 *       - bearerAuth: []  # Token erforderlich
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Unauthorized - user not authenticated
 *       500:
 *         description: Server error
 */
router.delete("/signout", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Kein Token vorhanden, Zugriff verweigert" });
    }

    // Anfrage an den externen Server weiterleiten
    const response = await axios.delete("http://localhost:3000/auth/signout", {
      headers: {
        Authorization: token,
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
 *                   example: "Robin"
 *                 lastName:
 *                   type: string
 *                   example: "G."
 *                 email:
 *                   type: string
 *                   example: "robin.goerlach@sasd.de"
 *                 age:
 *                   type: integer
 *                   example: 30
 *                 isAdmin:
 *                   type: boolean
 *                   example: false
 *                 location:
 *                   type: string
 *                   example: "Berlin"
 *                 customerExperience:
 *                   type: string
 *                   example: "Erfahrungen mit Projektmanagement und Teamführung."
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

    // Leite die Antwort weiter, inklusive customerExperience
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
 *                 example: "pwd123456"
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
 *                 example: "john.doe@gmail.com"
 *               password:
 *                 type: string
 *                 example: "pwd123456"
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

    // provide localhost:3000 answer to client
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

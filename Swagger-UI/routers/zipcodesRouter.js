import express from "express";
import axios from "axios";

const router = express.Router();

/**
 * @swagger
 * /zipcodes:
 *   get:
 *     summary: Get zip codes that match the given prefix (external request)
 *     parameters:
 *       - in: query
 *         name: zipcode
 *         required: true
 *         schema:
 *           type: string
 *         description: The zip code prefix to search for
 *     responses:
 *       200:
 *         description: List of matching zip codes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Server error
 */
router.get("/", async (req, res) => {
  const { zipcode } = req.query;

  if (!zipcode) {
    return res
      .status(400)
      .json({ error: 'Parameter "zipcode" ist erforderlich.' });
  }

  try {
    const response = await axios.get(`http://localhost:3000/zipcodes`, {
      params: { zipcode },
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

export default router;

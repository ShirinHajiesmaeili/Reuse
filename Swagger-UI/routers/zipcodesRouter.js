/**
 * @swagger
 * /zipcodes:
 *   get:
 *     summary: Get zip codes that match the given prefix
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

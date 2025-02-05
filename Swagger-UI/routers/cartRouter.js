/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get the current cart for the authenticated user
 *     responses:
 *       200:
 *         description: The user's cart
 *       404:
 *         description: Cart not found
 */

/**
 * @swagger
 * /cart/add:
 *   post:
 *     summary: Add a product to the cart
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

/**
 * @swagger
 * /cart/remove:
 *   post:
 *     summary: Remove a product from the cart
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

/**
 * @swagger
 * /cart/clear:
 *   post:
 *     summary: Clear the user's cart
 *     responses:
 *       200:
 *         description: Cart cleared successfully
 */

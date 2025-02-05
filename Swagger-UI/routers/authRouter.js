/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Create a new user account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     summary: Login with existing user credentials
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

/**
 * @swagger
 * /auth/signout:
 *   delete:
 *     summary: Logout the current user
 *     responses:
 *       200:
 *         description: User logged out successfully
 */

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Get the currently logged-in user's details
 *     responses:
 *       200:
 *         description: User details retrieved
 *       401:
 *         description: Unauthorized
 */

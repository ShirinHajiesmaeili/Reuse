import asyncHandler from "../utils/asyncHandler.js";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const cartController = {
  /* Retrieve the current cart for the authenticated user */
  getCart: asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ userID: req.user.userID }).populate(
      "items.productId"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  }),

  /* Add a product to the cart or update its quantity if it already exists */
  addToCart: asyncHandler(async (req, res) => {
    const { productId, quantity } = req.body;
    if (!quantity || quantity <= 0) {
      return res
        .status(400)
        .json({ message: "Quantity must be greater than zero" });
    }

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userID: req.user.userID });

    // Create a new cart if it does not exist
    if (!cart) {
      cart = new Cart({ userID: req.user.userID, items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find((item) =>
      item.productId.equals(productId)
    );
    if (existingItem) {
      existingItem.quantity += quantity; // Update the quantity
    } else {
      cart.items.push({ productId, quantity }); // Add new item
    }

    await cart.save();
    res.status(200).json(cart);
  }),

  /* Remove a specific product from the cart */
  removeFromCart: asyncHandler(async (req, res) => {
    const { productId } = req.body;

    const cart = await Cart.findOne({ userID: req.user.userID });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    // Filter out the product to be removed
    cart.items = cart.items.filter((item) => !item.productId.equals(productId));
    await cart.save();

    res.status(200).json(cart);
  }),

  /* Clear all items from the cart */
  clearCart: asyncHandler(async (req, res) => {
    const cart = await Cart.findOne({ userID: req.user.userID });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = []; // Remove all items
    await cart.save();

    res.status(200).json({ message: "Cart cleared" });
  }),
};

export default cartController;

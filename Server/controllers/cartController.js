import Cart from "../models/Cart.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user.name }).populate(
    "items.productName"
  );

  if (!cart) throw new ErrorResponse("Cart not found", 404);
  res.json(cart);
});

export const addToCart = asyncHandler(async (req, res, next) => {
  const { productName } = req.body;
  const cart = await Cart.findOne({ user: req.user.name });

  if (!cart) {
    await Cart.create({ user: req.user.name, items: [{ productName }] });
  } else {
    const itemExists = cart.items.some(
      (item) => item.productName === productName
    );
    if (!itemExists) cart.items.push({ productName });
    await cart.save();
  }

  res.status(201).json(cart);
});

export const removeFromCart = asyncHandler(async (req, res, next) => {
  const { productName } = req.body;
  const cart = await Cart.findOne({ user: req.user.name });

  if (!cart) throw new ErrorResponse("Cart not found", 404);

  cart.items = cart.items.filter((item) => item.productName !== productName);
  await cart.save();
  res.json(cart);
});

export const clearCart = asyncHandler(async (req, res, next) => {
  const cart = await Cart.findOne({ user: req.user.name });
  if (!cart) throw new ErrorResponse("Cart not found", 404);

  cart.items = [];
  await cart.save();
  res.json({ success: "Cart cleared" });
});

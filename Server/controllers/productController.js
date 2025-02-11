import Product from "../models/Product.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import cloudinary from "../utils/cloudinary.js";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const { name } = req.query;

  const products = await Product.find(name ? { name: `${name}` } : {});

  if (!products.length) throw new ErrorResponse("No products found", 404);
  res.json(products);
});

export const getProductByName = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  const product = await Product.findOne({ name: `${name}` });
  if (!product)
    throw new ErrorResponse(`Product "${name}" does not exist`, 404);

  res.json(product);
});

export const createProduct = asyncHandler(async (req, res, next) => {
  const { name, price, description, category, quantity, zipCode } = req.body;
  const { userID } = req;

  const { public_id, secure_url } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: "products",
    }
  );

  const newProduct = await Product.create({
    name,
    price,
    description,
    category,
    quantity,
    zipCode,
    userID,
    image: {
      url: secure_url,
      public_id,
    },
  });
  res.status(201).json(newProduct);
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { name },
  } = req;

  const foundProduct = await Product.findOne({ name: `${name}` });
  if (!foundProduct)
    throw new ErrorResponse(`Product "${name}" does not exist`, 404);

  const updatedProduct = await Product.findOneAndUpdate(
    { name: `${name}` },
    body,
    {
      new: true,
    }
  );
  res.json(updatedProduct);
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  const { name } = req.params;

  const foundProduct = await Product.findOne({ name: `${name}` });
  if (!foundProduct)
    throw new ErrorResponse(`Product "${name}" does not exist`, 404);

  await Product.deleteOne({ name: `${name}` });
  res.json({ success: `Product "${name}" was deleted` });
});

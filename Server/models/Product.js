import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    description: {
      type: String,
      required: true,
      maxLength: 500,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;

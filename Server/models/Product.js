import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  description: {
    type: String,
    required: true,
    maxLength: 500
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  location: {
    postalCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    }
  }
}, { timestamps: true });

const Product = model("Product", productSchema);

export default Product;

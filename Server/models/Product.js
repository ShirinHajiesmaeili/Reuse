import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Pls enter a product name'],
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
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: [0, 'Stock quantity cannot be negative'],
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Product = model('product', productSchema);

export default Product;

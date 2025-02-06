import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  electronics: {
    type: String,
    trim: true,
    maxLength: 50
  },
  fashion: {
    type: String,
    trim: true,
    maxLength: 50
  },
  homeAndGarden: {
    type: String,
    trim: true,
    maxLength: 50
  },
  motors: {
    type: String,
    trim: true,
    maxLength: 50
  },
  collectiblesAndArt: {
    type: String,
    trim: true,
    maxLength: 50
  },
  sports: {
    type: String,
    trim: true,
    maxLength: 50
  },
  toys: {
    type: String,
    trim: true,
    maxLength: 50
  },
  kitchen: {
    type: String,
    trim: true,
    maxLength: 50
  },
  bathroom: {
    type: String,
    trim: true,
    maxLength: 50
  },
  beauty: {
    type: String,
    trim: true,
    maxLength: 50
  },
  kids: {
    type: String,
    trim: true,
    maxLength: 50
  },
  pets: {
    type: String,
    trim: true,
    maxLength: 50
  }
}, { timestamps: true });

const Category = model('Category', categorySchema);

export default Category;
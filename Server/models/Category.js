import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  allCategories: {
    type: String,
    required: [true, 'Please select a category'],
    maxLength: 50,
  },
  electronics: {
    type: String,
    required: true,
    maxLength: 50,
  },
  fashion: {
    type: String,
    required: true,
    maxLength: 50,
  },
  homeAndGarden: {
    type: String,
    required: true,
    maxLength: 50,
  },
  motors: {
    type: String,
    required: true,
    maxLength: 50,
  },
  collectiblesAndArt: {
    type: String,
    required: true,
    maxLength: 50,
  },
  sports: {
    type: String,
    required: true,
    maxLength: 50,
  },
  toys: {
    type: String,
    required: true,
    maxLength: 50,
  },
  kitchen: {
    type: String,
    required: true,
    maxLength: 50,
  },
  bathroom: {
    type: String,
    required: true,
    maxLength: 50,
  },
  beauty: {
    type: String,
    required: true,
    maxLength: 50,
  },
  kids: {
    type: String,
    required: true,
    maxLength: 50,
  },
  pets: {
    type: String,
    required: true,
    maxLength: 50,
  }
});

const Category = model('category', categorySchema);

export default Category;
// Mongoose Model for Cart
import mongoose from 'mongoose';

// Schema for items in the cart, each referencing a product and its quantity
const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // References the Product model
        required: true
    },
    quantity: {
        type: Number, // Number of items to add to the cart
        required: true,
        min: 1 // Ensure quantity is at least 1
    }
});

// Main Cart schema, associated with a user and containing an array of items
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // References the User model
        required: true
    },
    items: [cartItemSchema], // Array of cart items
    createdAt: {
        type: Date,
        default: Date.now // Automatically set when the cart is created
    },
    updatedAt: {
        type: Date,
        default: Date.now // Automatically updated before saving
    }
});

// Middleware to update the 'updatedAt' field before saving
cartSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Create a Mongoose model for the Cart
const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
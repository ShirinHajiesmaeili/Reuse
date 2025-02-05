// Controller for Cart Management
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

const cartController = {
    // Retrieve the current cart for the authenticated user
    async getCart(req, res) {
        try {
            const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
            if (!cart) return res.status(404).json({ message: 'Cart not found' });
            res.json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Add a product to the cart or update its quantity if it already exists
    async addToCart(req, res) {
        const { productId, quantity } = req.body;
        try {
            const product = await Product.findById(productId);
            if (!product) return res.status(404).json({ message: 'Product not found' });

            let cart = await Cart.findOne({ userId: req.user._id });

            // Create a new cart if it does not exist
            if (!cart) {
                cart = new Cart({ userId: req.user._id, items: [] });
            }

            // Check if the product already exists in the cart
            const existingItem = cart.items.find(item => item.productId.equals(productId));
            if (existingItem) {
                existingItem.quantity += quantity; // Update the quantity
            } else {
                cart.items.push({ productId, quantity }); // Add new item
            }

            await cart.save();
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Remove a specific product from the cart
    async removeFromCart(req, res) {
        const { productId } = req.body;
        try {
            const cart = await Cart.findOne({ userId: req.user._id });
            if (!cart) return res.status(404).json({ message: 'Cart not found' });

            // Filter out the product to be removed
            cart.items = cart.items.filter(item => !item.productId.equals(productId));
            await cart.save();

            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Clear all items from the cart
    async clearCart(req, res) {
        try {
            const cart = await Cart.findOne({ userId: req.user._id });
            if (!cart) return res.status(404).json({ message: 'Cart not found' });

            cart.items = []; // Remove all items
            await cart.save();

            res.status(200).json({ message: 'Cart cleared' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default cartController;

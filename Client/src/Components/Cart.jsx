import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem'; // Import CartItem component

const Cart = () => {
  const { cart } = useContext(CartContext); // Access cart data from context

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="cart-container p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {/* Display cart items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.productId} data={item} />
        ))
      )}

      {/* Display the total price */}
      <div className="total-price mt-4">
        <h3 className="font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;

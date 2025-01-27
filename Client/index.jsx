import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartProvider from './Components/CartContext'; // Import the CartContext provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);

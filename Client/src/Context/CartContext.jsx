import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const savedCarts = localStorage.getItem("carts");
        return savedCarts ? JSON.parse(savedCarts) : [];
    });
    const [statusTab, setStatusTab] = useState(false);

    useEffect(() => {
        localStorage.setItem("carts", JSON.stringify(items));
    }, [items]);

    const addToCart = async ({ productId, quantity }) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            
            setItems(prevItems => {
                const existingItem = prevItems.find(item => item.productId === productId);
                if (existingItem) {
                    return prevItems.map(item => 
                        item.productId === productId 
                            ? {...item, quantity: item.quantity + quantity}
                            : item
                    );
                }
                return [...prevItems, { 
                    productId, 
                    quantity, 
                    price: product.price
                }];
            });
            setStatusTab(true);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const changeQuantity = ({ productId, quantity }) => {
        setItems(prevItems => {
            if (quantity > 0) {
                return prevItems.map(item => 
                    item.productId === productId 
                        ? { ...item, quantity }
                        : item
                );
            }
            return prevItems.filter(item => item.productId !== productId);
        });
    };

    const value = {
        items,
        statusTab,
        setStatusTab,
        addToCart,
        changeQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
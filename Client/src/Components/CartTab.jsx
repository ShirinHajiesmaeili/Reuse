import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../Context/CartContext';

const CartTab = () => {
    const { items: carts, statusTab, setStatusTab } = useContext(CartContext);

    const handleCloseTabCart = () => {
        setStatusTab(false);
    };

    const calculateTotal = () => {
        return carts.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2);
    };

    return (
        <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[auto_1fr_auto] 
            transform transition-transform duration-500 
            ${statusTab === false ? "translate-x-full" : ""}`}>
            
            <div className="p-5 border-b border-gray-600">
                <h2 className='text-white text-2xl'>Shopping Cart</h2>
            </div>

            <div className='p-5 overflow-y-auto'>
                {carts.length === 0 ? (
                    <div className="text-white text-center py-10">
                        Your cart is empty
                    </div>
                ) : (
                    <div className="space-y-4">
                        {carts.map((item, key) =>
                            <CartItem key={key} data={item}/>
                        )}
                    </div>
                )}
            </div>

            <div className='grid grid-rows-2'>
                <div className="p-4 bg-gray-800 text-white">
                    <div className="flex justify-between items-center">
                        <span>Total:</span>
                        <span className="text-xl font-bold">${calculateTotal()}</span>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <button 
                        className='bg-black text-white hover:bg-gray-800 transition-colors p-4' 
                        onClick={handleCloseTabCart}
                    >
                        CLOSE
                    </button>
                    <button 
                        className='bg-amber-600 text-white hover:bg-amber-700 transition-colors p-4'
                        disabled={carts.length === 0}
                    >
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTab;
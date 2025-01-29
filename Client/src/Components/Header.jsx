import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png';
import { CartContext } from '../Context/CartContext';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const { items: carts, setStatusTab } = useContext(CartContext);

    useEffect(() => {
        const total = carts.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(total);
    }, [carts]);

    const handleOpenTabCart = () => {
        setStatusTab(true);
    };

    return (
        <header className='flex justify-between items-center mb-5'>
            <Link to="/" className='text-xl font-semibold'>Home.</Link>
            <div className='flex items-center gap-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors'>
                    Upload Product
                </button>
                <div 
                    className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative cursor-pointer hover:bg-gray-200 transition-colors' 
                    onClick={handleOpenTabCart}
                >
                    <img src={iconCart} alt="Shopping Cart" className='w-6'/>
                    {totalQuantity > 0 && (
                        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>
                            {totalQuantity}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
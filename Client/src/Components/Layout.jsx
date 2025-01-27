import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import CartTab from './CartTab';
import { CartContext } from '../Context/CartContext';

const Layout = () => {
    const { statusTab } = useContext(CartContext);

    return (
        <div className='bg-zinc-200 min-h-screen'>
            <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 
                ${statusTab ? "-translate-x-56" : ""}`}>
                <Header />
                <Outlet />
            </main>
            <CartTab />
        </div>
    );
};

export default Layout;
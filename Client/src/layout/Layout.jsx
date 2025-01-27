import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CartTab from '../Components/CartTab';
import { CartContext } from '../Context/CartContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Layout = () => {
    const { statusTab } = useContext(CartContext);

    return (
        <div className='bg-zinc-200 min-h-screen'>
            <main className={`w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 
                ${statusTab ? "-translate-x-56" : ""}`}>
                <Navbar />
                <Outlet />
            </main>
            <CartTab />
            <Footer />
        </div>
    );
};

export default Layout;
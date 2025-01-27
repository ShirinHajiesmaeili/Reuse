import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { changeQuantity } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <div className='flex justify-between items-center bg-slate-600 text-white p-4 rounded-md animate-pulse'>
                <div className='w-12 h-12 bg-slate-500 rounded'></div>
                <div className='flex-1 mx-4'>
                    <div className='h-4 bg-slate-500 rounded w-3/4'></div>
                </div>
                <div className='w-20 h-8 bg-slate-500 rounded'></div>
            </div>
        );
    }

    if (!product) return null;

    const handleMinusQuantity = () => {
        changeQuantity({
            productId: productId,
            quantity: quantity - 1
        });
    };

    const handlePlusQuantity = () => {
        changeQuantity({
            productId: productId,
            quantity: quantity + 1
        });
    };

    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-4 rounded-md'>
            <img 
                src={product.image} 
                alt={product.title} 
                className='w-12 h-12 object-cover rounded'
            />
            <div className='flex-1 mx-4'>
                <h3 className='text-sm line-clamp-1'>{product.title}</h3>
                <p className='text-sm text-gray-300'>${(product.price * quantity).toFixed(2)}</p>
            </div>
            <div className='flex items-center gap-2'>
                <button 
                    className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600 hover:bg-gray-300 transition-colors' 
                    onClick={handleMinusQuantity}
                >
                    -
                </button>
                <span className='w-6 text-center'>{quantity}</span>
                <button 
                    className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600 hover:bg-gray-300 transition-colors' 
                    onClick={handlePlusQuantity}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;
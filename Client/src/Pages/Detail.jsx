import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error:', error);
                navigate('/');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id, navigate]);

    const handleMinusQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    };

    const handlePlusQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const handleAddToCart = () => {
        addToCart({
            productId: product.id,
            quantity: quantity
        });
    };

    if (loading) {
        return (
            <div className="animate-pulse">
                <h2 className='text-3xl text-center bg-gray-200 h-8 w-48 mx-auto rounded'></h2>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <div className='bg-gray-200 h-96 rounded'></div>
                    <div className='space-y-4'>
                        <div className='bg-gray-200 h-8 rounded'></div>
                        <div className='bg-gray-200 h-8 w-24 rounded'></div>
                        <div className='bg-gray-200 h-32 rounded'></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) return null;

    return (
        <div>
            <h2 className='text-3xl text-center mb-8'>PRODUCT DETAIL</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-white p-8 rounded-lg'>
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className='w-full h-[400px] object-contain'
                    />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl font-bold'>{product.title}</h1>
                    <p className='text-gray-600'>{product.category}</p>
                    <p className='font-bold text-3xl'>
                        ${product.price}
                    </p>
                    <div className='flex gap-5'>
                        <div className='flex gap-2 items-center'>
                            <button 
                                className='bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl hover:bg-gray-200 transition-colors' 
                                onClick={handleMinusQuantity}
                            >
                                -
                            </button>
                            <span className='bg-gray-200 h-10 w-10 font-bold text-xl rounded-xl flex items-center justify-center'>
                                {quantity}
                            </span>
                            <button 
                                className='bg-gray-100 h-10 w-10 font-bold text-xl rounded-xl hover:bg-gray-200 transition-colors' 
                                onClick={handlePlusQuantity}
                            >
                                +
                            </button>
                        </div>
                        <button 
                            className='bg-blue-500 text-white px-7 py-3 rounded-xl hover:bg-blue-600 transition-colors' 
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                    <div>
                        <h3 className='font-bold text-xl mb-2'>Description</h3>
                        <p className='text-gray-600'>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
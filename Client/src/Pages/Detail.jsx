import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import Footer from '../components/Footer';

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
                navigate('/shop-items'); // Navigate to shop items instead of home
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
            <>
                <TopNavigation />
                <div className="animate-pulse max-w-7xl mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-200 h-96 rounded"></div>
                        <div className="space-y-4">
                            <div className="bg-gray-200 h-8 rounded"></div>
                            <div className="bg-gray-200 h-8 w-24 rounded"></div>
                            <div className="bg-gray-200 h-32 rounded"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (!product) return null;

    return (
        <>
            <TopNavigation />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-[400px] object-contain"
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-gray-600">{product.category}</p>
                        <div className="flex items-center">
                            <span className="text-3xl font-bold text-blue-600">
                                ${product.price}
                            </span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center border rounded-lg">
                                <button 
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                                    onClick={handleMinusQuantity}
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x">{quantity}</span>
                                <button 
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                                    onClick={handlePlusQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                onClick={handleAddToCart}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Description</h2>
                            <p className="text-gray-600">{product.description}</p>
                        </div>
                        {product.rating && (
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => (
                                        <svg 
                                            key={index}
                                            className={`w-5 h-5 ${
                                                index < Math.round(product.rating.rate)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-600">({product.rating.count} reviews)</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Detail;
import { useState, useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';

const ShopItems = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <>
               
                <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-softBlue via-lavender to-endPurple">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
             
                <div className="text-center py-10 text-danger bg-gradient-to-b from-softBlue via-lavender to-endPurple min-h-screen">
                    <p>{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
                    >
                        Try Again
                    </button>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            
            <div className="min-h-screen bg-gradient-to-b from-softBlue via-lavender to-endPurple">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className='text-5xl font-bold text-secondary tracking-wider my-12 text-center'>
                        Shop Items
                    </h1>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {products.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                data={{
                                    id: product.id,
                                    name: product.title,
                                    price: product.price,
                                    image: product.image,
                                    description: product.description,
                                    rating: product.rating
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ShopItems;
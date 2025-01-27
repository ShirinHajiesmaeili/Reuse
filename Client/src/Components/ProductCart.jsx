import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { CartContext } from "../Context/CartContext";

const ProductCart = (props) => {
    const { addToCart } = useContext(CartContext);
    const {id, name, price, image, slug} = props.data;

    const handleAddToCart = () => {
        addToCart({
            productId: id,
            quantity: 1
        });
    };

    return (
        <div className='bg-white p-5 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl'>
            <Link to={`/product/${slug}`}>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-48 object-contain mb-4'
                />
            </Link>
            <h3 className='text-lg py-3 font-medium truncate'>{name}</h3>
            
            {/* Star Rating */}
            <div className="flex items-center mb-3">
                {[...Array(5)].map((_, index) => (
                    <svg 
                        key={index}
                        className={`w-4 h-4 ${index < Math.round(props.data.rating?.rate || 0) 
                            ? "text-yellow-300" 
                            : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                    {props.data.rating?.rate || 0}
                </span>
            </div>

            <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>${price.toFixed(2)}</p>
                <button 
                    className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2 items-center transition-colors' 
                    onClick={handleAddToCart}
                >
                    <img src={iconCart} alt="" className='w-5'/>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCart;
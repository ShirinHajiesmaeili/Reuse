import { useContext } from "react";
import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, price, image } = data;

  const handleAddToCart = () => addToCart({ productId: id, quantity: 1 });

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative group">
      <div className="relative z-10">
        <Link to={`/product/${id}`} className="block overflow-hidden relative">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-contain mb-4 transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
        </Link>
        <h3 className="text-lg py-3 font-medium truncate transition-colors duration-300 group-hover:text-[#184e77]">
          {name}
        </h3>

        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[360deg] ${
                index < Math.round(data.rating?.rate || 0)
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-500 transition-all duration-300 group-hover:text-gray-700">
            {data.rating?.rate || 0}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800 transition-all duration-300 group-hover:scale-110">
            {price.toFixed(2)} €
          </p>
          <div className="relative overflow-hidden rounded-md">
            <button
              onClick={handleAddToCart}
              className="relative bg-[#45b6e6] text-white p-2 rounded-md text-sm hover:bg-[#184e77] flex gap-2 items-center transition-all group-hover:shadow-lg border border-[#3da5d5] z-10 scale-105 hover:scale-[1.02] duration-300 hover:border-[#184e77]"
              style={{ boxShadow: "0 4px 12px rgba(69, 182, 230, 0.3)" }}
            >
              <img
                src={iconCart}
                alt=""
                className="w-5 brightness-0 invert opacity-90 group-hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] transition-all duration-300 font-semibold group-hover:tracking-wider">
                Add To Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

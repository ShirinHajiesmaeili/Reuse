import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo2 from "../assets/images/Logo2.png";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import enFlag from "../assets/images/en-flag.jpeg";
import deFlag from "../assets/images/de-flag.jpeg";
import frFlag from "../assets/images/fr-flag.jpeg";

const Navbar = () => {
  const { setStatusTab } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setStatusTab(true);
  };

  return (
    <header className="flex flex-col items-center justify-between font-sans">
      {/* Navigation Items */}
      <div className="flex items-center justify-between w-full px-6 py-3 bg-gradient-to-r bg-[#F0FFF0] shadow-lg rounded-lg">
        {/* Logo */}
        <div onClick={handleLogoClick} className="cursor-pointer">
          <img src={Logo2} alt="logo" className="h-20 object-contain" />
        </div>
        <nav>
          <ul className="flex space-x-10 text-lg font-semibold text-tertiary">
            {[
              "Home",
              "Shop Items",
              "Sell Items",
              "How Reuse Works",
              "Profile",
            ].map((item, idx) => (
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                key={idx}
              >
                <motion.li
                  className="relative group text-xl hover:text-primary cursor-pointer transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </motion.li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Icons */}
        <div className="flex items-center space-x-5">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
              viewBox="0 0 512 512"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
            {showDropdown && (
              <div className="absolute top-full mt-1 bg-white shadow-lg rounded border border-gray-300 w-14 h-auto z-50">
                {[enFlag, deFlag, frFlag].map((flag, index) => (
                  <img
                    key={index}
                    src={flag}
                    alt={
                      flag === enFlag
                        ? "English"
                        : flag === deFlag
                        ? "Deutsch"
                        : "French"
                    }
                    className="h-10 w-10 cursor-pointer m-1"
                    onClick={() => setShowDropdown(false)}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Conditionally render signup icon or user default avatar */}
          {!user ? (
            <Link to="/auth" aria-label="Sign Up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-primary h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
                viewBox="0 0 640 512"
              >
                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
              </svg>
            </Link>
          ) : (
            <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
              <span>{user.firstName ? user.firstName[0] : "U"}</span>{" "}
            </div>
          )}
          {/* Cart Component */}
          <div onClick={handleCartClick}>
            <Cart />
          </div>
        </div>
      </div>
      {/* Searchbar */}
      <div className="py-4 w-full">
        <Searchbar />
      </div>
    </header>
  );
};

export default Navbar;

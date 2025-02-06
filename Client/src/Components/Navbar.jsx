import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Logo2 from "../assets/images/Logo2.png";
import Img2 from "../assets/images/Img2.jpg";
import Img3 from "../assets/images/Img3.jpg";
import Img4 from "../assets/images/Img4.jpg";
import Img5 from "../assets/images/Img5.jpg";
import Img6 from "../assets/images/Img6.jpg";
import Cart from "./Cart";
import Searchbar from "./Searchbar";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { setStatusTab } = useContext(CartContext);
  const navigate = useNavigate();

  const images = [Img2, Img3, Img4, Img5, Img6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
          {/* Language Icon */}
          <Link to="/" aria-label="Select Language">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
              viewBox="0 0 512 512"
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
            </svg>
          </Link>

          {/* Signup Icon */}
          <Link to="/signup" aria-label="Sign Up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primary h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
              viewBox="0 0 640 512"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
            </svg>
          </Link>

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

      {/* Image Carousel*/}
      <div className="relative w-screen h-screen bg-gray-200 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt="Carousel"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>

      {/* Features */}
      <section className="py-6 px-4 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          The Benefits of Choosing Reuse
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-tertiary mb-2">
              Sustainability
            </h3>
            <p className="text-sm text-primary">
              Contribute to a greener world by reducing waste and reusing
              products.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-tertiary mb-2">
              Affordability
            </h3>
            <p className="text-sm text-primary">
              Affordable prices to make sustainability accessible for everyone.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-tertiary mb-2">
              Variety
            </h3>
            <p className="text-sm text-primary">
              A wide selection of products to choose from for every lifestyle.
            </p>
          </motion.div>
        </div>

        {/* Centered Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Link
            to="/shop-items"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
          >
            Shop Items
          </Link>

          <Link
            to="/auth"
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
          >
            Sell Items
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Navbar;

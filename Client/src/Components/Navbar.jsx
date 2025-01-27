import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/Logo.png";
import Cart from "../components/Cart";
import Searchbar from "../components/Searchbar";
import Video from "../components/Video";

const Navbar = () => {
  return (
    <div className="top-0 w-full z-50 flex flex-col items-center justify-between px-16 py-5 fontFamily:Rethink Sans, serif">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <img src={Logo} alt="logo" className="h-20 object-contain" />

        {/* Navigation Items */}
        <ul className="flex justify-center space-x-10 text-secondary text-lg font-semibold mr-10">
          <motion.li
            className="relative group hover:text-primary cursor-pointer transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </motion.li>

          <motion.li
            className="relative group hover:text-primary cursor-pointer transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Shop Items
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </motion.li>

          <motion.li
            className="relative group hover:text-primary cursor-pointer transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Companies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </motion.li>

          <motion.li
            className="relative group hover:text-primary cursor-pointer transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            How Reuse works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </motion.li>

          <motion.li
            className="relative group hover:text-primary cursor-pointer transition duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Profile
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </motion.li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          {/* Language Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-secondary h-5 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
            viewBox="0 0 512 512"
          >
            <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>

          {/* Signup Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-secondary h-5 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
            viewBox="0 0 640 512"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>

          {/* Cart Component */}
          <Cart />
        </div>
      </div>

      {/* Searchbar Component */}
      <Searchbar />

      {/* Video Section */}
      <Video />
    </div>
  );
};

export default Navbar;

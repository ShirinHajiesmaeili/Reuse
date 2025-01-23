import { motion } from "framer-motion";
import basket from "../assets/images/basket.png";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between px-16 py-5">
      <div className="flex items-center justify-between w-full">
        <img
          src="Reuse.Logo.426x217.png"
          alt="logo"
          className="h-36 object-contain"
        />
        {/* Navigation Items */}
        <ul className="flex justify-center space-x-10 text-secondary text-lg font-semibold ml-28">
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
          <img
            src={basket}
            alt="Language"
            className="h-7 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          />
          <img
            src="signupIcon.png"
            alt="Sign Up"
            className="h-7 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          />
          <img
            src="shoppingBasket.png"
            alt="Basket"
            className="h-7 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Basic Search Bar */}
      <div className="flex  space-x-1 bg-secondary rounded-full shadow-md px-1 py-1">
        <input
          type="text"
          className="px-4 py-2 borde rounded-full focus:ring-2 focus:ring-blue-500 text-secondary"
          placeholder="What are you looking for?"
        />

        <select className="px-4 py-2 borde rounded-full focus:ring-2 focus:ring-blue-500 text-secondary w-48">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home & Garden</option>
          <option>Motors</option>
          <option>Collectibles & Art</option>
          <option>Sports</option>
          <option>Toys</option>
          <option>Kitchen</option>
          <option>Bathroom</option>
          <option>Beauty</option>
          <option>Kids</option>
          <option>Pets</option>
        </select>

        <input
          type="text"
          className="w-32 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-secondary"
          placeholder="City"
        />

        <input
          type="text"
          className="w-32 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-secondary"
          placeholder="Zip Code"
        />

        <button className="px-4 py-2 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;

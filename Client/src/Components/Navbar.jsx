import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      {/* SVG Logo */}
      <img src="Logo.png" alt="logo" className="h-36 object-contain" />

      {/* Navigation Items */}
      <ul className="flex items-center space-x-10 text-secondary text-lg font-semibold">
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
          src="language.png"
          alt="Language"
          className="h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300"
        />
        <img
          src="signup.png"
          alt="Sign Up"
          className="h-7 w-auto cursor-pointer hover:scale-125 transition-transform duration-300 stroke-black"
        />
        <img
          src="basket.png"
          alt="Basket"
          className="h-7 w-auto cursor-pointer hover:scale-125 transition-transform duration-300 stroke-black"
        />
      </div>
    </div>
  );
};

export default Navbar;

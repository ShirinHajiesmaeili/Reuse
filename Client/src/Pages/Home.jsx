import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Img2 from "../assets/images/Img2.jpg";
import Img3 from "../assets/images/Img3.jpg";
import Img4 from "../assets/images/Img4.jpg";
import Img5 from "../assets/images/Img5.jpg";
import Img6 from "../assets/images/Img6.jpg";

const Home = () => {
  const images = [Img2, Img3, Img4, Img5, Img6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Image Carousel*/}
      <div className="relative w-screen h-[800px]">
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
    </>
  );
};

export default Home;

import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../data/authentication";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const signOutHandler = async () => {
    try {
      setIsLoading(true);
      await signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-4">
        <h2 className="text-xl font-bold text-primary mb-4">
          Welcome, {user.firstName}.
        </h2>
        <nav className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3  border-primary border-2 text-tertiary rounded-lg"
          >
            Overview
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3   border-primary border-2 text-tertiary rounded-lg"
          >
            Orders
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3   border-primary border-2 text-tertiary rounded-lg"
          >
            Wishlist
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3   border-primary border-2 text-tertiary rounded-lg"
          >
            Support
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3   border-primary border-2 text-tertiary rounded-lg"
          >
            Personal Details
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full flex items-center p-3 bg-red-100 text-red-700 rounded-lg"
            onClick={signOutHandler}
            disabled={isLoading}
          >
            {isLoading ? "Logging out" : "Logout"}
          </motion.button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Profile</h2>

        {/* Last Order */}
        <div className="p-4 mb-4">
          <h3 className="text-lg font-bold text-primary">Your Last Order</h3>
          <p className="text-tertiary">You have not placed any orders.</p>
          <Link to="/shop-items">
            {" "}
            {/* Corrected 'link' to 'Link' */}
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded-full font-bold">
              Start Shopping
            </button>
          </Link>
        </div>

        {/* Draft Orders */}
        <div className="p-4 mb-4">
          <h3 className="text-lg font-bold text-primary">Draft Orders</h3>
          <p className="text-tertiary">You have no Draft Orders.</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;

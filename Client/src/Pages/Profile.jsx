import { useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold">Welcome, {userName}.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Orders
          </button>
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Subscriptions
          </button>
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Wishlist
          </button>
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Rewards
          </button>
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Support
          </button>
          <button className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
            Profile
          </button>
          <button className="flex items-center p-3 bg-red-100 text-red-700 rounded-lg">
            Logout
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold">Your Last Order</h3>
          <p className="text-gray-600">You have not placed any orders.</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg">
            Start Shopping
          </button>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold">Draft Orders</h3>
          <p className="text-gray-600">You have no Draft Orders</p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold">Profile Card</h3>
          <p className="text-gray-700">{userEmail}</p>
          <p className="text-gray-700">{userName}</p>
          <p className="text-gray-600">Your Location</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Update Profile
          </button>
          <button className="mt-2 ml-2 px-4 py-2 bg-yellow-500 text-white rounded-lg">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

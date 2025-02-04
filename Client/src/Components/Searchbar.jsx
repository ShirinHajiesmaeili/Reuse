import React from "react";

const Searchbar = () => {
  return (
    <div className="flex justify-center">
      <form className="flex items-center space-x-6 bg-secondary rounded-full shadow-md px-6 py-2 w-full ">
        <input
          type="text"
          className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1"
          placeholder="What are you looking for?"
        />

        <select className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-tertiary flex-1">
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
          className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1"
          placeholder="City"
        />

        <input
          type="text"
          className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1"
          placeholder="Zip Code"
        />

        <button
          type="submit"
          className="px-6 py-2 text-white font-semibold rounded-full hover:bg-primary transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

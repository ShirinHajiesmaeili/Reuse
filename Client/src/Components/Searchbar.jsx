import React from "react";

const Searchbar = () => {
  return ( 
  <div className="">
    <form className="flex space-x-1 bg-secondary rounded-full shadow-md px-1 py-1 fontFamily:Rethink Sans, serif">
      <input
        type="text"
        className="px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary"
        placeholder="What are you looking for?"
      />

      <select className="px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary">
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
        className="w-32 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary"
        placeholder="City"
      />

      <input
        type="text"
        className="w-32 px-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary"
        placeholder="Zip Code"
      />

      <button
        type="submit"
        className="px-4 py-2 text-white font-semibold rounded-full hover:bg-primary transition duration-300"
      >
        Search
      </button>
      
    </form>
    </div>
  );
};

export default Searchbar;

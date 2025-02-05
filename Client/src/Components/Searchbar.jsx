import React, { useState } from "react";

const Searchbar = () => {
  const [zipCodes, setZipCodes] = useState([]);
  const [zipCodeInput, setZipCodeInput] = useState("");

  const changeHandler = async (event) => {
    const value = event.target.value;
    setZipCodeInput(value);

    if (value.length < 2) {
      setZipCodes([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/zipcodes?zipCode=${value}`
      );

      console.log("Response Status:", response.status);

      if (!response.ok) {
        console.error("Failed to fetch data");
        return;
      }

      const data = await response.json();
      console.log("Fetched Zip Codes:", data);

      setZipCodes(data);
    } catch (error) {
      console.error("Error fetching zip codes:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex items-center space-x-6 bg-secondary rounded-full shadow-md px-6 py-2 w-full ">
        <input
          type="text"
          className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1"
          placeholder="What are you looking for?"
        />

        <select className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-tertiary flex-1 ">
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
          value={zipCodeInput}
          onChange={(event) => {
            console.log("Zip Code Input:", event.target.value);
            changeHandler(event);
          }}
        />

        {zipCodes.length > 0 && (
          <select className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1">
            {zipCodes.map((item, index) => (
              <option key={index} value={item.postalCode}>
                {item.postalCode} - {item.postalCodeName},{" "}
                {item.postalCodeNameLong}
              </option>
            ))}
          </select>
        )}

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

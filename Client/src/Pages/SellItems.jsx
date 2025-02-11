import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createProduct } from "../data/product";
import { getAllZipCodes } from "../data/zipCode";

const SellItems = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [zipCodes, setZipCodes] = useState([]);

  const handleZipCodeChange = async (event) => {
    const value = event.target.value;

    if (value.length < 2) {
      setZipCodes([]);
      return;
    }

    try {
      const data = await getAllZipCodes(value);
      setZipCodes(data);
    } catch (error) {
      console.error("Error fetching zip codes:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const name = formdata.get("name");
    const description = formdata.get("description");
    const zipCode = formdata.get("zipCode");
    const price = formdata.get("price");
    const quantity = formdata.get("quantity");
    const category = formdata.get("category");
    const image = formdata.get("image");

    // Validation
    if (
      !name ||
      !description ||
      !zipCode ||
      !price ||
      !quantity ||
      !category ||
      !image
    ) {
      return alert("All fields are required.");
    }

    // Posting the data
    try {
      setIsLoading(true);
      await createProduct(formdata);
      navigate("/shop-items");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <main className="my-4">
      <form
        className="max-w-screen-md min-h-[80vh] mx-auto flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Title <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Description <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <textarea
            className="input input-bordered w-full resize-none min-h-32"
            name="description"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Zip Code <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="number"
            className="input input-bordered w-full"
            required
            onChange={handleZipCodeChange}
          />
        </label>
        <label className="form-control w-full">
          {zipCodes.length > 0 && (
            <select
              className="px-6 py-2 border rounded-full focus:ring-2 focus:ring-blue-500 text-primary flex-1"
              name="zipCode"
            >
              {zipCodes.map((item, index) => (
                <option key={index} value={item.postalCode}>
                  {item.postalCodeNameLong}
                </option>
              ))}
            </select>
          )}
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Price <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="number"
            className="input input-bordered w-full"
            name="price"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Quantity <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="number"
            className="input input-bordered w-full"
            name="quantity"
            required
          />
        </label>
        {/* <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Delivery Option <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="deliveryoption"
            required
          />
        </label> */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Category <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <select
            className="input input-bordered w-full"
            name="category"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="all_categories">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home_garden">Home & Garden</option>
            <option value="motors">Motors</option>
            <option value="collectibles_art">Collectibles & Art</option>
            <option value="sports">Sports</option>
            <option value="toys">Toys</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="beauty">Beauty</option>
            <option value="kids">Kids</option>
            <option value="pets">Pets</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl">
              Image <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="file"
            className="input input-bordered w-full"
            name="image"
            accept="image/*"
            required
          />
        </label>
        <button className="btn btn-primary w-full" disabled={isLoading}>
          {isLoading ? "Posting item..." : "Sell new item"}
        </button>
      </form>
    </main>
  );
};

export default SellItems;

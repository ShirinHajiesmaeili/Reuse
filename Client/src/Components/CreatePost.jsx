import axios from "axios";

const CreatePost = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extract value from input field
    const formdata = new FormData(event.target);
    const title = formdata.get("title");
    const description = formdata.get("description");
    const zipcode = formdata.get("zipcode");
    const city = formdata.get("city");
    const price = formdata.get("price");
    const quantity = formdata.get("quantity");
    const deliveryOption = formdata.get("deliveryoption");
    const category = formdata.get("category");
    const image = formdata.get("image");

    // Validation
    if (
      !title ||
      !description ||
      !zipcode ||
      !city ||
      !price ||
      !quantity ||
      !deliveryOption ||
      !category ||
      !image
    ) {
      return alert("All fields are required.");
    }

    const newPostData = {
      title,
      description,
      zipcode,
      city,
      price,
      quantity,
      deliveryOption,
      image,
    };

    //Posting the data
    try {
      const res = await axios.post("http://localhost:3000/posts", newPostData, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="my-4">
      <form
        className="max-w-screen-md min-h-[80vh] mx-auto flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Title <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="title"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Description <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <textarea
            className="input input-bordered w-full resize-none min-h-32"
            name="description"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Zipcode <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="zipcode"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              City <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="city"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Price <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="price"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Quantity <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="quantity"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Delivery Option <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="deliveryoption"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Category <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="category"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Image <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="image"
          />
        </label>
        <button className="btn btn-primary w-full">Create New Item</button>
      </form>
    </main>
  );
};

export default CreatePost;

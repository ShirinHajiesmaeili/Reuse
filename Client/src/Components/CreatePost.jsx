const CreatePost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const date = formData.get("date");
    const location = formData.get("location");
    const quantity = formData.get("quantity");
    const deliveryOption = formData.get("deliveryoption");

    if (
      !title ||
      !description ||
      !date ||
      !location ||
      !quantity ||
      !deliveryOption
    ) {
      return alert("All fields are required.");
    }

    const productDetails = {
      title,
      description,
      date,
      location,
      quantity,
      deliveryOption,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(productDetails),
    };

    fetch("http://localhost:3000/api/events", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return alert("Product created successfully!");
      })
      .catch((err) => console.log(err));
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
              Event Name <span className="text-red-400">&#42;</span>
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
              Date <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="date"
            className="input input-bordered w-full "
            name="date"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-xl">
              Location <span className="text-red-400">&#42;</span>
            </span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full "
            name="location"
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
            name="deliveryoption" // Corrected name
          />
        </label>
        <button className="btn btn-primary w-full">Create New Item</button>
      </form>
    </main>
  );
};

export default CreatePost;

const ProductDescription = (id) => {
  return (
    <div>
      <h1>Apple iMac 27&quote; 13.2 Late 2012 Faulty for Hobbyists</h1>
      <p>No Function</p>
      <hr />
      <div>
        <img src="" alt="Avatar" className="w-[60px] h-[60px] flex" />
        <span className="text-xl">
          <b>E00356</b> (210307)
        </span>
      </div>
      <hr />
      <div className="rating mr-2.5">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <button className="btn btn-primary">Reviews ...</button>
      <p>
        <b>Price:</b>
        <a href="https://www.paypal.com/instantcommerce/checkout/4Y8X96K5S9TR4">
          <span> Buy me a Coffee</span>
        </a>
      </p>
      <p>Shipping: </p>
      <p>Payment: </p>
    </div>
  );
};

export default ProductDescription;

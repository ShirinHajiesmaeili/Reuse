const ProductImage = (id) => {
  return (
    <div>
      <img className="w-[877px] h-[628px]" src="0.png" alt="Product Image" />
      <p className="m-[10px] p-[10px] flex">
        <img
          className="w-[60px] h-[60px] m-[10px] p-[10px] border-2 border-black rounded-md"
          src="0.png"
          alt="Product Image"
        />
        <img
          className="w-[60px] h-[60px] m-[10px] p-[10px] border-2 border-black rounded-md"
          src="1.png"
          alt="Product Image"
        />
      </p>
    </div>
  );
};

export default ProductImage;

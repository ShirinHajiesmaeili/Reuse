import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);

  // Calculate total number of items in cart
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="indicator">
      <span className="indicator-item badge bg-tertiary border-tertiary h-4 w-4 text-white">
        {totalItems}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-primary h-6 w-auto cursor-pointer hover:scale-125 transition-transform duration-300 flex justify-center"
        viewBox="0 0 576 512"
      >
        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
      </svg>
    </div>
  );
};

export default Cart;

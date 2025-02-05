import mongoose from "mongoose";

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  products: [
    {
      productID: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  userID: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Cart = model("cart", cartSchema);

export default Cart;

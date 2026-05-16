import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 mb-4 rounded shadow flex justify-between"
        >
          <div>
            <h2 className="font-bold">{item.name}</h2>

            <p>${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="bg-red-500 text-white px-4 py-2"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

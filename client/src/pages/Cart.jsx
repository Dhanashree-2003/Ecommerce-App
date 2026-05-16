import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { cart, removeFromCart } = useContext(CartContext);

  // Protect cart page
  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 mb-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">{item.name}</h2>

                <p>${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() => navigate("/checkout")}
            className="bg-black text-white px-6 py-3 rounded mt-4"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

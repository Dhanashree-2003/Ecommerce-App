import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const token = localStorage.getItem("token");

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Protect checkout page
  if (!token) {
    return <Navigate to="/" />;
  }

  const handleOrder = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {orderPlaced ? (
          <p className="text-green-600 text-lg font-bold">
            Order placed successfully!
          </p>
        ) : (
          <form onSubmit={handleOrder}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-2 mb-4"
              required
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-2 mb-4"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 mb-4"
              required
            />

            <button className="bg-black text-white px-4 py-2 w-full rounded">
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;

import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>

      <p>{product.description}</p>

      <p className="font-bold mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-3 rounded"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;

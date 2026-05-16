import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">E-Commerce Store</h1>

      <div className="flex gap-4 items-center">
        {token ? (
          <>
            <Link to="/home">Home</Link>

            <Link to="/cart">Cart</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>

            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

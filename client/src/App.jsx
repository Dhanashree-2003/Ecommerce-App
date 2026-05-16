import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/home"
            element={
              localStorage.getItem("token") ? <Home /> : <Navigate to="/" />
            }
          />

          <Route
            path="/cart"
            element={
              localStorage.getItem("token") ? <Cart /> : <Navigate to="/" />
            }
          />

          <Route
            path="/checkout"
            element={
              localStorage.getItem("token") ? <Checkout /> : <Navigate to="/" />
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

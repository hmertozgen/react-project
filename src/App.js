import "./App.css";
// import Todo from "./components/Todo";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/pages/Auth/Signin";
import Signup from "./components/pages/Auth/Signup";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import { useEffect, useState } from "react";

const localData = localStorage.getItem("cartItems");

const cartFromLocalStorage = localData ? JSON.parse(localData) : [];
function App() {
  const [cartItems, setcartItems] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/products"
              element={
                <Products
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            ></Route>
            <Route path="/home" element={<Home />}></Route>

            <Route
              path="/product/:id"
              element={<ProductDetail handleAddProduct={handleAddProduct} />}
            ></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

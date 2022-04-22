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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            {/* <Route path="/basket" element={<Basket />}></Route> */}

            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

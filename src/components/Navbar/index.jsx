import { Button } from "react-bootstrap";
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import styles from "./styles.modules.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <Link to="/">eCommerce</Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Link to="/signin">
          <Button variant="secondary">Login</Button>{" "}
        </Link>
        <Link to="/signup">
          <Button variant="secondary">Register</Button>{" "}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

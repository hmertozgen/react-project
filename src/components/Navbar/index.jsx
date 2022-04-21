import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.modules.css";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  return (
    <nav className="nav fixed-top change">
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
        {/* <Link to="/signin"> */}
        <Button variant="secondary" onClick={handleShowLogin}>
          Login
        </Button>{" "}
        {/* </Link> */}
        <Button variant="secondary" onClick={handleShow}>
          Register
        </Button>{" "}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signup />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signin />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseLogin}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;

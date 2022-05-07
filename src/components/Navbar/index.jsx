import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.modules.css";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/config";

import { signOut } from "firebase/auth";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [user] = useAuthState(auth);
  return (
    <>
      <div className="header">
        <Link to="/" className="logo Link">
          LOGO
        </Link>
        <div>
          <input type="checkbox" id="checkk" />
          {/* Start-Navbar items*/}

          <ul className="navbarr">
            <li>
              <Link to="home" className="Link ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="Link ">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="Link">
                Cart
                <i className="fas fa-shopping-cart ms-1" />
              </Link>
            </li>
            <li>
              <Link to="#" className="Link" onClick={handleShowLogin}>
                Login
              </Link>
            </li>
            <li>
              <Link to="#" className="Link" onClick={handleShow}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/todoapp" className="Link">
                Todo
              </Link>
            </li>
            {/* Start-Navbar add item After Login*/}

            <li>
              <div>
                {user && (
                  <>
                    <span className="text-black me-1">
                      {user.displayName || user.email}
                    </span>
                    <button
                      className="btn btn-secondary btn-sm me-3"
                      onClick={() => {
                        signOut(auth);
                      }}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </li>
            {/* End-Navbar add item After Login*/}
          </ul>
          {/* End-Navbar items*/}
        </div>
        <div className="mobile">
          <Link to="/cart" className="Link">
            <i className="fas fa-shopping-cart ms-1" />
          </Link>

          <label htmlFor="checkk" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        {/* Start-Login-Register Modals*/}

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
          </Modal.Footer>
        </Modal>
        {/* End-Login-Register Modals*/}
      </div>
    </>
  );
}

export default Navbar;

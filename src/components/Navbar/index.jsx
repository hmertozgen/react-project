import { Button, Container, Modal, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.modules.css";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/config";

import { useEffect } from "react";
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
              <Link to="#" className="Link">
                Contact
              </Link>
            </li>
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
          </ul>
        </div>
        <div className="mobile">
          <Link to="/cart" className="Link">
            <i className="fas fa-shopping-cart ms-1" />
          </Link>

          <label htmlFor="checkk" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
        </div>

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
      </div>

      {/* <nav className="nav fixed-top change44">
        <div className="left44">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">
            <Link to="/">LOGO</Link>
          </label>

          <ul className="menu">
            <li>
              <Link className="a" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="a" to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link className="a" to="/cart">
                <a className="align-center" variant="primary">
                  Cart
                  <i className="fas fa-shopping-cart ms-1" />
                </a>
              </Link>
            </li>

            <li>
              {" "}
              <Link to="/signin">
                <a
                  className="btn"
                  variant="secondary"
                  onClick={handleShowLogin}
                >
                  Login
                </a>{" "}
              </Link>
            </li>
            <li>
              {" "}
              <a className="btn" variant="secondary" onClick={handleShow}>
                Register
              </a>{" "}
            </li>
            <li>
              <div>
                {user && (
                  <>
                    <span className="text-white m-2">
                      {user.displayName || user.email}
                    </span>
                    <button
                      className="btn btn-primary btn-sm me-3"
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
          </ul>
        </div>

        // <div className="right">
        //   <Modal show={show} onHide={handleClose}>
        //     <Modal.Header closeButton>
        //       <Modal.Title>Register</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //       <Signup />
        //     </Modal.Body>
        //     <Modal.Footer>
        //       <Button variant="secondary" onClick={handleClose}>
        //         Close
        //       </Button>
        //     </Modal.Footer>
        //   </Modal>
        //   <Modal show={showLogin} onHide={handleCloseLogin}>
        //     <Modal.Header closeButton>
        //       <Modal.Title>Login</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //       <Signin />
        //     </Modal.Body>
        //     <Modal.Footer>
        //       <Button variant="secondary" onClick={handleCloseLogin}>
        //         Close
        //       </Button>
        //     </Modal.Footer>
        //   </Modal>
        // </div>
      </nav> */}
    </>
  );
}

export default Navbar;

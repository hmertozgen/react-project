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
    // <nav className="nav fixed-top change">
    //   <div className="left">
    //     <div className="logo">
    //       <Link to="/">LOGO</Link>
    //     </div>

    //     <ul className="menu">
    //       <li>
    //         <Link to="/products">Products</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <Link to="/basket">
    //     <Button className="align-center" variant="primary">
    //       Basket
    //     </Button>
    //   </Link>
    //   <div>
    //     {user && (
    //       <>
    //         <span>Signed is as {user.displayName || user.email}</span>
    //         <button
    //           className="btn btn-primary btn-sm me-3"
    //           onClick={() => {
    //             signOut(auth);
    //           }}
    //         >
    //           Logout
    //         </button>
    //       </>
    //     )}
    //   </div>
    //   <div className="right">
    //     {/* <Link to="/signin"> */}
    //     <Button variant="secondary" onClick={handleShowLogin}>
    //       Login
    //     </Button>{" "}
    //     {/* </Link> */}
    //     <Button variant="secondary" onClick={handleShow}>
    //       Register
    //     </Button>{" "}
    //     <Modal show={show} onHide={handleClose}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Register</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Signup />
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //         <Button variant="primary">Save Changes</Button>
    //       </Modal.Footer>
    //     </Modal>
    //     <Modal show={showLogin} onHide={handleCloseLogin}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Login</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Signin />
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleCloseLogin}>
    //           Close
    //         </Button>
    //         <Button variant="primary">Save Changes</Button>
    //       </Modal.Footer>
    //     </Modal>
    //   </div>
    // </nav>

    //--------------

    // <nav className="nav fixed-top change44">
    //   <div className="left44">
    //     <input type="checkbox" id="check" />
    //     <label htmlFor="check" className="checkbtn">
    //       <i className="fas fa-bars"></i>
    //     </label>
    //     <label className="logo">
    //       <Link to="/">LOGO</Link>
    //     </label>

    //     <ul className="menu">
    //       <li>
    //         <div>
    //           {user && (
    //             <>
    //               <span className="text-white m-2">
    //                 {user.displayName || user.email}
    //               </span>
    //               <button
    //                 className="btn btn-primary btn-sm me-3"
    //                 onClick={() => {
    //                   signOut(auth);
    //                 }}
    //               >
    //                 Logout
    //               </button>
    //             </>
    //           )}
    //         </div>
    //       </li>
    //       <li>
    //         <Link className="a" to="/products">
    //           Products
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="a" to="/cart">
    //           <a className="align-center" variant="primary">
    //             Cart
    //             <i className="fas fa-shopping-cart ms-1" />
    //           </a>
    //         </Link>
    //       </li>

    //       <li>
    //         {" "}
    //         {/* <Link to="/signin"> */}
    //         <a className="btn" variant="secondary" onClick={handleShowLogin}>
    //           Login
    //         </a>{" "}
    //         {/* </Link> */}
    //       </li>
    //       <li>
    //         {" "}
    //         <a className="btn" variant="secondary" onClick={handleShow}>
    //           Register
    //         </a>{" "}
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="right">
    //     <Modal show={show} onHide={handleClose}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Register</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Signup />
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleClose}>
    //           Close
    //         </Button>
    //         <Button variant="primary">Save Changes</Button>
    //       </Modal.Footer>
    //     </Modal>
    //     <Modal show={showLogin} onHide={handleCloseLogin}>
    //       <Modal.Header closeButton>
    //         <Modal.Title>Login</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         <Signin />
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button variant="secondary" onClick={handleCloseLogin}>
    //           Close
    //         </Button>
    //         <Button variant="primary">Save Changes</Button>
    //       </Modal.Footer>
    //     </Modal>
    //   </div>
    // </nav>

    <>
      <nav className="nav fixed-top change44">
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
              {/* <Link to="/signin"> */}
              <a className="btn" variant="secondary" onClick={handleShowLogin}>
                Login
              </a>{" "}
              {/* </Link> */}
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

        <div className="right">
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
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import Buy from "./Buy";
import "./styles.modules.css";

function Cart({ cartItems, handleAddProduct, handleRemoveProduct }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="cart-items">
        <div className="cart-items-header"> Cart Items</div>

        {cartItems.length === 0 && (
          <div className="cart-items-empty">No items are added.</div>
        )}
        <div>
          {" "}
          {cartItems.map((item) => (
            <>
              <div key={item.id} className="cart-items-list row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-items-image col"
                />

                <div className="cart-items-title col">{item.title}</div>

                <div className="cart-items-price col">{item.price} TL</div>
                <div className="cart-items-functions col">
                  <button
                    className="cart-items-add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="cart-items-remove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>

                <div className="cart-items-quantity col">{item.quantity}</div>
              </div>
            </>
          ))}
        </div>
        <div className="cart-items-total-price-name">
          Total Price
          <div className="cart-items-total-price">{totalPrice} TL</div>
          <button
            className="btn btn-success ms-3"
            onClick={(e) => {
              handleShow();
            }}
          >
            BUY
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Buy />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;

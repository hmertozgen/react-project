import React from "react";
import "./styles.modules.css";

function Cart({ cartItems, handleAddProduct, handleRemoveProduct }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header"> Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added.</div>
      )}
      <div>
        {" "}
        {cartItems.map((item) => (
          <>
            <div key={item.id} className="cart-items-list">
              <img
                src={item.image}
                alt={item.name}
                className="cart-items-image"
              />

              <div className="cart-items-title">{item.title}</div>

              <div className="cart-items-price">{item.price} TL</div>
              <div className="car-items-functions">
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

              <div className="cart-items-quantity">{item.quantity}</div>
            </div>
          </>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">{totalPrice} TL</div>
        <button className="btn btn-success ms-3">BUY</button>
      </div>
    </div>
  );
}

export default Cart;

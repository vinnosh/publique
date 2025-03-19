import React from 'react';
import { Link } from 'react-router-dom';
import './CartDropdown.css'; // optional

const CartDropdown = ({ cart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-dropdown">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <div className="cart-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout">
            <button className="checkout-button">Go to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartDropdown;

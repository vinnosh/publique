import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51R4QVdFHHKiPA7qHMUBuTmHcrf4zSOy5Wbnr4fktllQmbwXpRKYUf2toMf9uCrN9gVKqkun4rkwx9aZ4p3EGWmF800QTtD1RTM'); // replace with your real key

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-confirm" onClick={handleCheckout}>
            Pay with Stripe
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;

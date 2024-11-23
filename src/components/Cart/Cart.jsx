import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Cart.css';

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <div className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <button type="button" onClick={() => setIsCartVisible(false)}>
        Close Cart
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

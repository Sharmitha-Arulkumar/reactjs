import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cart, dispatch } = useContext(ShopContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="page-container empty-cart">
        <h2>Your Shopping Cart is Empty 🛒</h2>
        <p>Go back to the homepage to grab items you love!</p>
      </div>
    );
  }
   return (
    <div className="page-container cart-page">
      <h1 className="page-title">Your Cart</h1>
      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p className="item-unit-price">${item.price.toFixed(2)}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } })}>-</button>
                  <span>{item.quantity}</span>
                   <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } })}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>✕</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Total Items:</span><span>{cart.reduce((s, i) => s + i.quantity, 0)}</span></div>
          <div className="summary-row total"><span>Grand Total:</span><span>${totalPrice.toFixed(2)}</span></div>
          <button className="checkout-btn" onClick={() => { alert('Order Processed Mock Execution!'); dispatch({ type: 'CLEAR_CART' }); }}>Proceed to Checkout</button>
        </div>
         </div>
    </div>
  );
};

export default Cart;
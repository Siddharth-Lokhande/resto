import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const { cartItems, removeFromCart, getCartTotal } = useCart();

    const subtotal = getCartTotal();
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    const handlePayment = () => {
        window.location.href = 'https://www.stripe.com';
    };

    if (!isOpen) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-container" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2 className="title-3">Your Cart</h2>
                    <button className="cart-close-btn" onClick={onClose}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <ion-icon name="cart-outline" className="cart-empty-icon"></ion-icon>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => {
                                const itemPrice = parseFloat(item.price.replace('$', ''));
                                const itemTotal = itemPrice * item.quantity;

                                return (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-info">
                                            <h4 className="cart-item-name">{item.title}</h4>
                                            <div className="cart-item-details">
                                                <span className="cart-item-qty">Qty: {item.quantity}</span>
                                                <span className="cart-item-price">{item.price} each</span>
                                            </div>
                                            <span className="cart-item-total">${itemTotal.toFixed(2)}</span>
                                        </div>
                                        <button
                                            className="cart-item-delete"
                                            onClick={() => removeFromCart(item.id)}
                                            aria-label="Remove item"
                                        >
                                            <ion-icon name="trash-outline"></ion-icon>
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cart-summary">
                            <div className="cart-summary-row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="cart-summary-row">
                                <span>Tax (10%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="cart-summary-row cart-summary-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="cart-pay-btn" onClick={handlePayment}>
                            <span className="text text-1">Pay Now</span>
                            <span className="text text-2">Proceed to Payment</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;

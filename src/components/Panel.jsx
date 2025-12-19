import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Panel = () => {
    const { cartItems, getItemCount, getCartTotal } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const itemCount = getItemCount();
    const total = getCartTotal();
    const isVisible = cartItems.length > 0;

    const handlePanelClick = () => {
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <div
                className={`cart-panel ${isVisible ? 'visible' : ''}`}
                onClick={handlePanelClick}
                role="button"
                tabIndex={0}
                aria-label={`Cart: ${itemCount} items, Total: $${total.toFixed(2)}. Click to view cart.`}
            >
                <div className="panel-content">
                    <div className="panel-icon">
                        <ion-icon name="cart"></ion-icon>
                    </div>
                    <div className="panel-info">
                        <span className="panel-items">{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
                        <span className="panel-total">${total.toFixed(2)}</span>
                    </div>
                    <div className="panel-action">
                        <span className="panel-cta">View Cart</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </div>
                </div>
            </div>

            <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
        </>
    );
};

export default Panel;

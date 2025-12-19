import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Item = ({ img, alt, title, price, badge, description }) => {
    // Generate a unique ID for this item based on title
    const itemId = title.toLowerCase().replace(/\s+/g, '-');

    const { addToCart, removeFromCart, isInCart, getItemQuantity, updateQuantity } = useCart();

    const isAdded = isInCart(itemId);
    const [quantity, setQuantity] = useState(getItemQuantity(itemId));

    // Sync quantity with cart when it changes externally
    useEffect(() => {
        if (isAdded) {
            setQuantity(getItemQuantity(itemId));
        }
    }, [isAdded, itemId, getItemQuantity]);

    const handleCartClick = () => {
        if (isAdded) {
            removeFromCart(itemId);
        } else {
            addToCart({
                id: itemId,
                title,
                price,
                quantity,
                img
            });
        }
    };

    const incrementQuantity = () => {
        const newQty = quantity + 1;
        setQuantity(newQty);
        if (isAdded) {
            updateQuantity(itemId, newQty);
        }
    };

    const decrementQuantity = () => {
        const newQty = quantity > 1 ? quantity - 1 : 1;
        setQuantity(newQty);
        if (isAdded) {
            updateQuantity(itemId, newQty);
        }
    };

    return (
        <div className="menu-card hover:card">
            <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                <img src={img} width="100" height="100" loading="lazy" alt={alt} className="img-cover" />
            </figure>
            <div>
                <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">{title}</a>
                    </h3>
                    {badge && <span className="badge label-1">{badge}</span>}
                    <span className="span title-2">{price}</span>
                </div>
                <p className="card-text label-1">
                    {description}
                </p>
            </div>
            <div className="cart-controls">
                <button
                    className={`cart-btn ${isAdded ? 'added' : ''}`}
                    onClick={handleCartClick}
                    aria-label={isAdded ? 'Added to cart' : 'Add to cart'}
                    title={isAdded ? 'Added to cart' : 'Add to cart'}
                >
                    {isAdded ? (
                        <ion-icon name="checkmark-circle" style={{ color: '#28a745', fontSize: '24px' }}></ion-icon>
                    ) : (
                        <ion-icon name="cart-outline" style={{ fontSize: '24px' }}></ion-icon>
                    )}
                </button>
                <div className="quantity-selector">
                    <button
                        className="qty-btn"
                        onClick={decrementQuantity}
                        aria-label="Decrease quantity"
                    >
                        <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <span className="qty-value">{quantity}</span>
                    <button
                        className="qty-btn"
                        onClick={incrementQuantity}
                        aria-label="Increase quantity"
                    >
                        <ion-icon name="add-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;



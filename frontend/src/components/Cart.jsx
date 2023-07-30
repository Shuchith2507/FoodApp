import React from 'react';
import '../styles/Cart.css';
import { useNavigate } from "react-router-dom"


const Cart = ({ cartItems, onCheckout }) => {
    const navigate = useNavigate()
    const handleCheckout = () => {
        navigate('/payment')
    };
    return (
        <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>
            <ul className="cart-items-list">
                {cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                        <div className="item-details">
                            <img src={item.imageUrls} alt={item.name} className="item-image" />
                            <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">${item.price}</p>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <p className="total-text">Total:</p>
                <p className="total-price">${cartItems.reduce((total, item) => total + item.price, 0)}</p>
            </div>
            <button className="checkout-btn" onClick={() => handleCheckout()} >
                Pay
            </button>
        </div >
    );
};

export default Cart;
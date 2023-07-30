import React from 'react';
import '../styles/Payment.css';
import { useNavigate } from "react-router-dom"

function Payment({ }) {
    const navigate = useNavigate()
    const GoBack = () => {
        navigate('/')
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <div className="payment-details">
                <p>Payment Completed!</p>
            </div>
            <button className="buy-again-btn" onClick={GoBack}>Buy Again</button>
        </div>
    );
}

export default Payment;

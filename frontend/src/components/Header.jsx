import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

function Header() {
    return (
        <nav>
            <div className="logo-container">
                <Link to="/"><img src="/logo.png" alt="Food App Logo" className="logo" /></Link>
                <h2 className="app-title">Food App</h2>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    );
}

export default Header;

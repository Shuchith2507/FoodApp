import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Food App. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to Food App</h1>
                <p>Order delicious food online and get it delivered to your doorstep.</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </header>
            <section className="feature-section">
                <div className="feature-card">
                    <i className="fas fa-utensils"></i>
                    <h3>Quality Food</h3>
                    <p>We provide top-quality, hygienic, and delicious food for you to enjoy.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-truck"></i>
                    <h3>Fast Delivery</h3>
                    <p>Our delivery service is quick and efficient, ensuring your food arrives fresh.</p>
                </div>
                <div className="feature-card">
                    <i className="fas fa-star"></i>
                    <h3>Customer Favorites</h3>
                    <p>Explore our menu and discover customer-favorite dishes that everyone loves.</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;

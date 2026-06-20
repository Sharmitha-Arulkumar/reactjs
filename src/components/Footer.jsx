import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <h3>🛍️ Shopping Zone</h3>
                    <p>Your ultimate destination for tech gadgets, premium jewelery, and modern fashion collections.</p>
                    <div className="social-icons">
                        <span>🌐</span> <span>📸</span> <span>🐦</span> <span>💼</span>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="footer-links">
                    <h4>Quick Navigation</h4>
                    <ul>
                        <li><Link to="/">Home Marketplace</Link></li>
                        <li><Link to="/categories">Product Departments</Link></li>
                        <li><Link to="/signup">Create Account</Link></li>
                        <li><Link to="/cart">View Shopping Cart</Link></li>
                    </ul>
                </div>
                {/* Category Shortcuts Section */}
                <div className="footer-links">
                    <h4>Shop Departments</h4>
                    <ul>
                        <li><Link to="/categories/electronics">⚡ Electronics</Link></li>
                        <li><Link to="/categories/jewelery">✨ Premium Jewelery</Link></li>
                        <li><Link to="/categories/mens">👔 Men's Clothing</Link></li>
                        <li><Link to="/categories/womens">👗 Women's Clothing</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shopping Zone. Built with React JS & Vanilla CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
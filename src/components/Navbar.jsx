import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { cart } = useContext(ShopContext);
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value.trim();
    if (query) {
        navigate(`/search?q=${encodeURIComponent(query)}`);
      searchInputRef.current.value = '';
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛍️ Shopping Zone</Link> <br />
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input ref={searchInputRef} type="text" placeholder="Search products..." />
        <button type="submit">Search</button> <br /><br />
      </form>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/cart" className="cart-icon">
          🛒 Cart <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
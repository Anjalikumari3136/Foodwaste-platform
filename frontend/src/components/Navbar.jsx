import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src/assets/logoimg.webp" alt="Logo" className="logo" />
      </div>

      <ul className="navbar-center">
        <li><a href="/">Home</a></li>
        <li><a href="/browse-food">Browse Food</a></li>
        <li><a href="#">Partners</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-right">
        <button
          className="signin-btn"
          onClick={() => (window.location.pathname = '/SignIn')}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

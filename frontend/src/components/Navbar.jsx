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
        <li><a href="/browse-food">Donate Food</a></li>
        <li><a href="#">Receivers</a></li>
        <li><a href="/about-Us">About Us</a></li>
        <li><a href="#">Order History</a></li>
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

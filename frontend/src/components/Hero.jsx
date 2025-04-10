import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="hero-left">
        <h1>Save Food.<br />Feed People.<br />Save Money.</h1>
        <p className="hero-subtext">
          Get quality food at affordable prices or donate surplus to those in need.
        </p>
        <button className="find-food-btn">Find Food Near You</button>
      </div>
      <div className="hero-right">
        <img src="src/assets/hero_image.jpg" alt="Hero" className="hero-image" />
      </div>
    </header>
  );
}

export default Hero;

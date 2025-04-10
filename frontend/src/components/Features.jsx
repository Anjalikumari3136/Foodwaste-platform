import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <a href="/partners" className="feature">
        <img src="src/assets/icon1.svg" alt="Partner Icon" />
        <h3>Partnering with Food Providers</h3>
        <p>Collaborate with businesses to list surplus food</p>
      </a>

      <a href="/browse" className="feature">
        <img src="src/assets/icon2.svg" alt="Browse Icon" />
        <h3>Browse & Purchase Surplus Food</h3>
        <p>Find and buy unsold food from local businesses</p>
      </a>

      <a href="/delivery" className="feature">
        <img src="src/assets/icon3.svg" alt="Delivery Icon" />
        <h3>Food Collection or Delivery</h3>
        <p>Choose to collect your food or have it delivered</p>
      </a>

      <a href="/reviews" className="feature">
        <img src="src/assets/icon4.svg" alt="Ratings Icon" />
        <h3>Ratings & Trust</h3>
        <p>Share your feedback and ensure quality</p>
      </a>
    </section>
  );
}

export default Features;

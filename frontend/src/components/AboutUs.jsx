import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [platformName, setPlatformName] = useState('[Your Platform Name]');

  useEffect(() => {
    const fetchPlatformName = async () => {
      const nameFromAPI = 'FoodBridge'; // Simulated fetch result
      setPlatformName(nameFromAPI);
    };

    fetchPlatformName();
  }, []);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f4f4f9',
      color: '#333',
      margin: 0,
      padding: 0,
    },
    header: {
      backgroundColor: '#2d2d2d',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
      backgroundColor: '#fff',
    },
    h2: {
      fontSize: '2em',
      marginTop: '40px',
      marginBottom: '10px',
      color: '#222',
      borderLeft: '5px solid #4CAF50',
      paddingLeft: '10px',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    ul: {
      paddingLeft: '20px',
      fontSize: '1.1em',
      marginBottom: '30px',
    },
    li: {
      marginBottom: '10px',
      lineHeight: '1.5',
    },
    values: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'space-around',
      marginTop: '30px',
    },
    valueBox: {
      backgroundColor: '#e8f5e9',
      padding: '25px 20px',
      borderRadius: '10px',
      textAlign: 'center',
      flex: '1',
      minWidth: '220px',
      maxWidth: '260px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
    },
    valueTitle: {
      fontSize: '1.5em',
      marginBottom: '10px',
      color: '#388e3c',
    },
    cta: {
      textAlign: 'center',
      marginTop: '60px',
      fontSize: '1.5em',
      fontWeight: '600',
      color: '#444',
      backgroundColor: '#d0f0c0',
      padding: '20px',
      borderRadius: '12px',
    },
    footer: {
      backgroundColor: '#2d2d2d',
      color: 'white',
      textAlign: 'center',
      padding: '25px 20px',
      marginTop: '60px',
      fontSize: '1em',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.2)',
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About Us</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>Redefining Hunger, One Meal at a Time</h2>
        <p style={styles.paragraph}>
          At <strong>{platformName}</strong>, we believe that <em>no food should go to waste while people go hungry</em>.
          Our mission is to bridge the gap between surplus food and those who need it the most.
          We provide a platform that connects food donors—restaurants, event organizers, grocery stores, and individuals—with NGOs, food banks, and communities in need.
        </p>

        <h2 style={styles.h2}>Our Story</h2>
        <p style={styles.paragraph}>
          Every day, tons of edible food are wasted while millions of people face hunger. This alarming contrast inspired us to take action.
          Our journey began with a simple question: <strong>"What if we could turn food waste into hope?"</strong>
        </p>
        <p style={styles.paragraph}>
          From this idea, we built a platform dedicated to creating a more sustainable, responsible, and compassionate food system.
          By enabling easy donations and timely redistributions, we ensure good food finds its way to those who need it instead of ending up in landfills.
        </p>

        <h2 style={styles.h2}>What We Do</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Connect Donors & Receivers:</strong> We match food donors with local NGOs, food banks, and shelters based on location and availability.</li>
          <li style={styles.li}><strong>Ensure Safe Redistribution:</strong> We follow safety guidelines to ensure food is handled and delivered hygienically.</li>
          <li style={styles.li}><strong>Raise Awareness:</strong> We educate communities and businesses about food waste and sustainable practices.</li>
          <li style={styles.li}><strong>Support Communities:</strong> Our platform helps nourish underprivileged communities while reducing the carbon footprint of food waste.</li>
        </ul>

        <h2 style={styles.h2}>Our Vision</h2>
        <p style={styles.paragraph}>
          To create a world where food is valued, not wasted, and where hunger is no longer a crisis but a challenge we have overcome—together.
        </p>

        <h2 style={styles.h2}>Our Mission</h2>
        <p style={styles.paragraph}>
          To build a collaborative ecosystem that reduces food waste and supports food-insecure communities through technology, partnerships, and awareness.
        </p>

        <h2 style={styles.h2}>Our Core Values</h2>
        <div style={styles.values}>
          <div style={styles.valueBox}>
            <h3 style={styles.valueTitle}>Compassion</h3>
            <p>Putting people and their needs at the heart of what we do.</p>
          </div>
          <div style={styles.valueBox}>
            <h3 style={styles.valueTitle}>Sustainability</h3>
            <p>Promoting responsible consumption and minimizing waste.</p>
          </div>
          <div style={styles.valueBox}>
            <h3 style={styles.valueTitle}>Collaboration</h3>
            <p>Uniting donors, NGOs, and communities for a common cause.</p>
          </div>
          <div style={styles.valueBox}>
            <h3 style={styles.valueTitle}>Transparency</h3>
            <p>Ensuring all donations are tracked and delivered responsibly.</p>
          </div>
        </div>

        <div style={styles.cta}>
          <p>Join Us – Together, we can make sure no food goes to waste and no one sleeps hungry.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 {platformName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;

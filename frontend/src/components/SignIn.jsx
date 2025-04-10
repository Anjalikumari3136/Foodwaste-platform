import React from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #6366f1, #8b5cf6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    borderRadius: "1.5rem",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1.5rem",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "0.6rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    marginTop: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  signupText: {
    textAlign: "center",
    fontSize: "0.9rem",
    marginTop: "1rem",
    color: "#666",
  },
  link: {
    color: "#4f46e5",
    textDecoration: "none",
    cursor: "pointer",
  },
};

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign In</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input id="email" type="email" placeholder="you@example.com" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input id="password" type="password" placeholder="••••••••" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
            <input id="confirmPassword" type="password" placeholder="••••••••" style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
        <p style={styles.signupText}>
          Don't have an account? <span onClick={handleSignupRedirect} style={styles.link}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
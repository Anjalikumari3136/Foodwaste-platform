import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  signinText: {
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
  error: {
    color: "red",
    fontSize: "0.9rem",
    textAlign: "center",
    marginTop: "0.5rem",
  },
};

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignInRedirect = () => {
    navigate("/signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        fullname: { firstname: firstName, lastname: lastName },
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              style={styles.input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              style={styles.input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.signinText}>
          Already registered?{" "}
          <span onClick={handleSignInRedirect} style={styles.link}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;





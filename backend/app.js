// app.js
const dotenv = require("dotenv");
dotenv.config(); // Make sure this runs FIRST to load JWT_SECRET

const express = require("express");
const cors = require("cors");
const connectToDb = require("./db/db"); // Assuming you have this DB connection file
const userRoutes = require("./routes/user.routes");

const app = express();

// Connect to database
connectToDb();

// Middleware
app.use(cors()); // Allow cross-origin requests (essential for frontend/backend on different ports)
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Basic root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// User routes
app.use("/users", userRoutes);

// Export the app
module.exports = app;

const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

// --- Register User ---
module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Format errors to send a single message or the first message
    const errorMessage = errors.array()[0].msg; // Sending the first error message
    return res.status(400).json({ message: errorMessage });
  }

  try {
    const { fullname, email, password } = req.body;

    // Service should handle password hashing and user creation
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: password, // Pass plain password, service will hash it
    });

    // Service or model should generate the token
    const token = user.generateAuthToken(); // This method should exist on the user model instance

    // Send only the token as expected by the frontend
    res.status(201).json({ token });
  } catch (err) {
    // Handle specific errors like duplicate email
    if (err.message.includes("E11000 duplicate key error")) {
      return res.status(400).json({ message: "Email already exists." });
    }
    // Generic error
    console.error("Registration Error:", err); // Log the error on the server side
    res.status(500).json({
      message: err.message || "Registration failed. Please try again.",
    });
  }
};

// --- Login User ---
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array()[0].msg;
    return res.status(400).json({ message: errorMessage });
  }

  try {
    const { email, password } = req.body;

    // Find the user by email and validate password via service/model
    const user = await userService.findUserByCredentials(email, password); // Add this service function

    if (!user) {
      // This case is handled by the findUserByCredentials service function
      // but a fallback error is good.
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // User found and password matched, generate token
    const token = user.generateAuthToken(); // This method should exist on the user model instance

    // Send only the token
    res.status(200).json({ token });
  } catch (err) {
    // Catch errors thrown by findUserByCredentials (e.g., invalid credentials)
    if (err.message === "Invalid email or password.") {
      return res.status(401).json({ message: err.message });
    }
    console.error("Login Error:", err); // Log server errors
    res
      .status(500)
      .json({ message: err.message || "Login failed. Please try again." });
  }
};

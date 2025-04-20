// routes/user.routes.js
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

// --- Registration Route ---
router.post(
  "/register",
  [
    body("fullname.firstname")
      .notEmpty()
      .withMessage("First name is required."),
    body("fullname.lastname").notEmpty().withMessage("Last name is required."),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(), // Optional: Standardize email format
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long."),
  ],
  userController.registerUser
);

// --- Login Route ---
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(), // Optional
    body("password").notEmpty().withMessage("Password is required."), // No min length check here, just check if provided
  ],
  userController.loginUser // Add a login controller function
);

module.exports = router;

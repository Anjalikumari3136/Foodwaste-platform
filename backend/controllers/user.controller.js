const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array().map(err => err.msg) 
    });
  }

  try {
    const { fullname, email, password } = req.body;
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
    });

    const token = user.generateAuthToken();
    res.status(201).json({ token });
  } catch (err) {
    if (err.message === "Email already exists") {
      return res.status(409).json({ message: err.message });
    }
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Registration failed. Please try again." });
  }
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array().map(err => err.msg) 
    });
  }

  try {
    const { email, password } = req.body;
    const user = await userService.findUserByCredentials(email, password);
    const token = user.generateAuthToken();
    res.status(200).json({ token });
  } catch (err) {
    if (err.message === "Invalid email or password") {
      return res.status(401).json({ message: err.message });
    }
    console.error("Login Error:", err);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
};
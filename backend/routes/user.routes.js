const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if all required fields are present
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required (fullname, email, password)" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname,
      },
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send success response
    res.status(201).json({ message: 'User registered successfully', user: savedUser });
    
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;

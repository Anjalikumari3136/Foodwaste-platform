const mongoose = require('mongoose');

// Define schema for user
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Automatically converts email to lowercase
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;

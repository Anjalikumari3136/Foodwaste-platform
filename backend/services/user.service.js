const userModel = require("../models/user.model"); // Import the user model

// --- Create User ---
module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password, // Plain password received here
}) => {
  // Basic check (validationResult in controller is more robust)
  if (!firstname || !lastname || !email || !password) {
    throw new Error("All fields are required"); // This error might not be reached if validation works
  }

  // Mongoose model's pre-save hook should handle hashing the password
  const user = await userModel.create({
    fullName: { firstname, lastname },
    email,
    password, // Pass plain password to the model
  });

  // The created user object returned by Mongoose will have the hashed password
  return user;
};

// --- Find User and Validate Credentials for Login ---
module.exports.findUserByCredentials = async (email, password) => {
  // Find the user by email
  const user = await userModel.findOne({ email });

  if (!user) {
    // User not found
    return null; // Or throw new Error("Invalid email or password.")
  }

  // Compare the provided password with the hashed password in the database
  // This method should exist on the user model instance
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    // Password doesn't match
    return null; // Or throw new Error("Invalid email or password.")
  }

  return user;
};

// Alternative find user by email (might be useful elsewhere)
module.exports.findUserByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};

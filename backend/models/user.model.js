const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Install bcryptjs
const jwt = require("jsonwebtoken"); // Install jsonwebtoken
const dotenv = require("dotenv"); // Ensure dotenv is configured in app.js or here
dotenv.config(); // Load environment variables

const userSchema = new mongoose.Schema(
  {
    fullName: {
      firstname: {
        type: String,
        required: true,
        trim: true, // Remove whitespace from both ends of a string
      },
      lastname: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true, // Enforces uniqueness at the DB level
      lowercase: true, // Store emails in lowercase
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5, // Should match validation length
    },
    // Add other fields as needed, e.g., createdAt, updatedAt
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields automatically

// --- Mongoose Middleware: Hash Password Before Saving ---
userSchema.pre("save", async function (next) {
  // 'this' refers to the user document
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
  }
  next(); // Continue the save operation
});

// --- Instance Method: Compare Password ---
userSchema.methods.comparePassword = async function (candidatePassword) {
  // 'this' refers to the user document (which has the hashed password)
  // Compare the provided password with the hashed password in the DB
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

// --- Instance Method: Generate JWT Token ---
userSchema.methods.generateAuthToken = function () {
  // 'this' refers to the user document
  const user = this;
  const token = jwt.sign(
    { _id: user._id, email: user.email }, // Payload - include user ID and potentially email
    process.env.JWT_SECRET, // Secret key from environment variables
    { expiresIn: "7d" } // Token expiration time (optional)
  );
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

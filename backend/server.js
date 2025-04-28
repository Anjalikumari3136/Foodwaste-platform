// const http = require("http");
// const app = require("./app");
// const Food = require("./models/food.model"); // Ensure this path is correct
// const User = require("./models/user.model"); // Ensure this path is correct
// const port = process.env.PORT || 5000;

// const server = http.createServer(app);

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// // Add error handling for uncaught exceptions
// process.on('uncaughtException', (err) => {
//   console.error('Uncaught Exception:', err);
//   process.exit(1);
// });

// process.on('unhandledRejection', (err) => {
//   console.error('Unhandled Rejection:', err);
//   process.exit(1);
// });

const http = require("http");
const app = require("./app"); // Import app.js where routes and middleware are configured
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Get the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Create the server with the Express app
const server = http.createServer(app);

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect to MongoDB (Food2 database)
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB (food2) successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if connection fails
  }
};

// Call the connectToDb function to connect to the database
connectToDb();

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the application if uncaught exception occurs
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1); // Exit the application if unhandled rejection occurs
});

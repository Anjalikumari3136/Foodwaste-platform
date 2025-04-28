
// const mongoose = require('mongoose');

// const connectToDb = async () => {
//   const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000, // 5s timeout
//     retryWrites: true, // Enable retry on write failures
//     retryReads: true, // Enable retry on read failures
//     maxPoolSize: 10 // Connection pool size
//   };

//   let attempts = 0;
//   while (attempts < 3) {
//     try {
//       // await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food2', options);
//       await mongoose.connect(process.env.MONGODB_URI || 'MONGODB_URI=mongodb://127.0.0.1:27017/food2', options);
//       console.log("✅ MongoDB Connected");
//       return;
//     } catch (err) {
//       attempts++;
//       console.error(`❌ Attempt ${attempts} failed:`, err.message);
//       if (attempts === 3) throw err;
//       await new Promise(res => setTimeout(res, 2000)); // Wait 2s
//     }
//   }
// };

// module.exports = connectToDb;


const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const connectToDb = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB (food2) successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the application if connection fails
  }
};

module.exports = connectToDb;

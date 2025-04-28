const mongoose = require('mongoose');

// Define the Food schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;

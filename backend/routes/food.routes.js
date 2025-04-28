const express = require('express');
const router = express.Router();
const Food = require('../models/food.model');

// Add a new food item (POST request)
router.post('/api/foods', async (req, res) => {
  try {
    const { name, description, category, quantity } = req.body;
    const food = new Food({ name, description, category, quantity });

    const savedFood = await food.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all food items (GET request)
router.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

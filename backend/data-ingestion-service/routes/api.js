const express = require('express');
const SensorData = require('../models/SensorData');
const router = express.Router();

// Add a new sensor data entry
router.post('/add', async (req, res) => {
  try {
    const newSensorData = new SensorData(req.body);
    await newSensorData.save();
    res.status(201).json(newSensorData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch all sensor data
router.get('/fetch', async (req, res) => {
  try {
    const sensorData = await SensorData.find();
    res.json(sensorData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const Alert = require('../models/Alert');

const router = express.Router();

// Endpoint to create a new alert
router.post('/create', async (req, res) => {
  const { level, message } = req.body;

  try {
    const alert = new Alert({ level, message });
    await alert.save();
    res.status(201).json({ message: 'Alert created', alert });
  } catch (err) {
    res.status(400).json({ message: 'Error creating alert', err });
  }
});

// Endpoint to get all alerts
router.get('/all', async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.status(200).json(alerts);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching alerts', err });
  }
});

module.exports = router;

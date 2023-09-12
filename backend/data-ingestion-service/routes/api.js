const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SensorData = require('../models/SensorData');
const Alert = require('../models/Alert');
const User = require('../models/User');

const router = express.Router();

// Signup endpoint
// Signup endpoint
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', {
      expiresIn: '1h',
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});


// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY');

  res.status(200).json({ token });
});

const requireAuth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).send({ error: 'Please authenticate.' });
  }

  const token = authHeader.replace('Bearer ', '');

  try {
    const data = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.userId = data.userId;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
};



// Endpoint to ingest sensor data
router.post('/ingest', requireAuth, async (req, res) => {
  const { sensorId, value } = req.body;

  // Create a new SensorData object and save it
  const sensorData = new SensorData({ sensorId, value });
  await sensorData.save();

  // Generate alert if needed (this is a simple example)
  if (value > 100) {
    const alert = new Alert({
      level: 'warning',
      message: `High sensor value detected: ${value}`,
    });
    await alert.save();
  }

  res.json({ message: 'Data ingested successfully' });
});

// Endpoint to retrieve all sensor data
router.get('/data', async (req, res) => {
  const allData = await SensorData.find();
  res.json(allData);
});

// Endpoint to retrieve all alerts
router.get('/alerts', async (req, res) => {
  const allAlerts = await Alert.find();
  res.json(allAlerts);
});

module.exports = router;

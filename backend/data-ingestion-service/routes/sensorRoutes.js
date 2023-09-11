const express = require('express');
const sensorController = require('../controllers/sensorController');

const router = express.Router();

router
  .route('/')
  .get(sensorController.getAllSensors)
  .post(sensorController.createSensorData);

module.exports = router;

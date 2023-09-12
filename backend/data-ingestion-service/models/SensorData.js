const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  sensorId: String,
  value: Number,
  timestamp: Date,
});

module.exports = mongoose.model('SensorData', SensorDataSchema);

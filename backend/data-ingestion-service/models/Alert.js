const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ['info', 'warning', 'critical'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Alert', alertSchema);

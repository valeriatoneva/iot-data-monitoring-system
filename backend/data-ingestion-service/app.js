const express = require('express');
const mongoose = require('mongoose');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sensorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/sensors', sensorRoutes);

// Server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

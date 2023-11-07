const express = require('express');
const mongoose = require('mongoose');
const alertRoutes = require('./routes/alertRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alertDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connected!');
});

db.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

// Root path route handler
app.get('/', (req, res) => {
  res.send('Hello, this is the Alerting Service');
});

// Use the alert routes
app.use('/alerts', alertRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

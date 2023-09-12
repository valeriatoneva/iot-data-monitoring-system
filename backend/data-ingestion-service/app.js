const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// Connect to MongoDB (replace the URI with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/sensorDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

// Use the API routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is the data ingestion service');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

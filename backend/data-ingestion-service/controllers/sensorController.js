const SensorData = require('../models/SensorData');

exports.getAllSensors = async (req, res) => {
  const sensors = await SensorData.find();
  
  res.status(200).json({
    status: 'success',
    data: {
      sensors
    }
  });
};

exports.createSensorData = async (req, res) => {
  const newSensorData = await SensorData.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      sensor: newSensorData
    }
  });
};

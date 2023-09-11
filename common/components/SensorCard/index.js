import React from 'react';
import './SensorCard.css';

const SensorCard = ({ sensorName, sensorValue }) => {
  return (
    <div className="sensor-card">
      <h3>{sensorName}</h3>
      <p>{sensorValue}</p>
    </div>
  );
};

export default SensorCard;

// Dashboard.js

import React, { useEffect, useState } from 'react';
import SensorCard from '@your-namespace/common/components/SensorCard';
import Alert from '@your-namespace/common/components/Alert';

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch sensor data and alerts here
    // Then update sensorData and alerts state
  }, []);

  return (
    <div className="dashboard">
      <h1>IoT Dashboard</h1>
      
      <div className="sensor-cards">
        {sensorData.map((data, index) => (
          <SensorCard 
            key={index}
            sensorName={data.name}
            sensorValue={data.value}
          />
        ))}
      </div>

      <div className="alerts">
        {alerts.map((alert, index) => (
          <Alert 
            key={index}
            alertMessage={alert.message}
            alertLevel={alert.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import axios from 'axios';

export const fetchSensorData = async (sensorId) => {
  try {
    const response = await axios.get(`/api/sensors/${sensorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

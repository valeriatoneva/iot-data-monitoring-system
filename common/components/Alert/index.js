import React from 'react';
import './Alert.css';

const Alert = ({ alertMessage, alertLevel }) => {
  return (
    <div className={`alert ${alertLevel}`}>
      {alertMessage}
    </div>
  );
};

export default Alert;

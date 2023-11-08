# IoT Data Monitoring System

## Introduction
The IoT Data Monitoring System is designed to collect, process, and visualize data from various IoT sensors. This system is capable of handling large streams of data in real-time and provides a user-friendly dashboard for monitoring and alert notifications.

## Features
- Real-time data ingestion from IoT sensors
- Data processing and storage using MongoDB
- Real-time alerting based on predefined sensor thresholds
- User authentication and management
- Dashboard for data visualization and alert monitoring

## System Architecture

The IoT Data Monitoring System is architected using a microservices approach for the backend and microfrontends for the frontend, ensuring scalability, maintainability, and a separation of concerns across different aspects of the system.

### Backend Architecture

Our backend is composed of two primary microservices:

1. **Data Ingestion Service**: Responsible for handling real-time data streams from IoT devices. It processes and validates incoming sensor data before storing it in the MongoDB database. This service ensures data integrity and provides an API for data retrieval.

2. **Alerting Service**: Monitors the ingested data for specific conditions or thresholds. When a threshold is met, this service generates alerts and notifications. It also provides an API for managing and retrieving alerts.

Both services are designed to operate independently, with their own databases and APIs, facilitating easy updates and scaling.

### Frontend Architecture

The frontend is split into several microfrontends, each serving a distinct feature of the dashboard:

- **Main Dashboard**: Serves as the primary interface for users, displaying real-time data and alerts.
- **Settings**: Allows users to configure various parameters and settings for the IoT devices and alert conditions.
- **Other Feature-Specific UIs**: Additional microfrontends can be developed and integrated as needed, without impacting the rest of the frontend ecosystem.

This architecture is built to be modular, allowing for features to be updated or added with minimal disruption.

### Communication

The microservices and microfrontends communicate over HTTP/HTTPS protocols. The backend services expose RESTful APIs that the frontend consumes to display data and interact with the backend.

### Containerization

The entire system is containerized using Docker, which simplifies deployment and provides a consistent environment for development, testing, and production.

Docker Compose orchestrates the multi-container setup, ensuring that each service can be launched with a single command, maintaining the necessary inter-service links.

### Development and Build Process

We use Lerna to manage multiple JavaScript packages in the same repository, streamlining the development process of our microservices and microfrontends.

Webpack compiles and bundles the frontend code, optimizing for performance and ensuring compatibility across different browsers and environments.


### Prerequisites
- Node.js
- MongoDB
- Docker (optional for containerization)

### Installation

#### Backend
Navigate to each backend service directory and install dependencies:

```sh
cd backend/data-ingestion-service
npm install

cd backend/alerting-service
npm install
```

#### Frontend
Navigate to the frontend directory and install dependencies:

```sh
cd frontend/main
npm install
```

#### Running the Application
Backend Services

```sh
# Data Ingestion Service
cd backend/data-ingestion-service
npm start

# Alerting Service
cd backend/alerting-service
npm start
```

#### Frontend
```sh
# Main Dashboard
cd frontend/main
npm start
```
Access the dashboard at http://localhost:3000.


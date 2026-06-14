require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');
const logger = require('./utils/logger');

const {
  connectRedis,
} = require('./config/redis');

const {
  connectProducer,
} = require('./kafka/producer');

const PORT = process.env.PORT || 5002;

const startServer = async () => {
  try {
    await connectDB();

    await connectRedis();

    await connectProducer();

    app.listen(PORT, () => {
      logger.log(`Billing Service running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Billing Service startup failed', error);
  }
};

startServer();
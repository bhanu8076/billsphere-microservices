require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

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
      console.log(
        `Billing Service running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
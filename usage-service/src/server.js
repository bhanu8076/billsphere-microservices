require('dotenv').config();

const app = require('./app');

const connectDB = require(
  './config/db'
);

const runConsumer = require(
  './kafka/consumer'
);

const PORT =
  process.env.PORT || 5003;

const start = async () => {
  await connectDB();

  await runConsumer();

  app.listen(PORT, () => {
    console.log(
      `Usage Service running on ${PORT}`
    );
  });
};

start();
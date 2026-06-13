require('dotenv').config();

const runConsumer = require(
  './kafka/consumer'
);

runConsumer();
const redis = require('redis');
const logger = require('../utils/logger');

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on('error', (err) => {
  logger.error('Redis Error:', err);
});

const connectRedis = async () => {
  await redisClient.connect();
  logger.log('Redis Connected');
};

module.exports = {
  redisClient,
  connectRedis,
};
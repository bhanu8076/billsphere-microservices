const redis = require('redis');

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on('error', (err) => {
  console.error('Redis Error:', err);
});

const connectRedis = async () => {
  await redisClient.connect();
  console.log('Redis Connected');
};

module.exports = {
  redisClient,
  connectRedis,
};
const { Kafka } = require('kafkajs');
const logger = require('../utils/logger');

const kafka = new Kafka({
  clientId: 'billing-service',
  brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();

  logger.log('Kafka Producer Connected');
};

module.exports = {
  producer,
  connectProducer,
};
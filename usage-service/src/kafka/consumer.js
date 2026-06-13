const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'usage-service',
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({
  groupId: 'usage-group',
});

const runConsumer = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: 'bill-events',
    fromBeginning: true,
  });

  console.log('Kafka Consumer Connected');

  await consumer.run({
    eachMessage: async ({
      message,
    }) => {
      const event = JSON.parse(
        message.value.toString()
      );

      console.log(
        'Received Event:',
        event
      );
    },
  });
};

module.exports = runConsumer;
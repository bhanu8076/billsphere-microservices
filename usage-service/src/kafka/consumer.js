const { Kafka } = require("kafkajs");
const Usage = require("../models/Usage");
const logger = require("../utils/logger");

const kafka = new Kafka({
  clientId: "usage-service",
  brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({
  groupId: "usage-group",
});

const runConsumer = async () => {
  await consumer.connect();

  await consumer.subscribe({
    topic: "bill-events",
    fromBeginning: true,
  });

  logger.log("Kafka Consumer Connected");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const event = JSON.parse(message.value.toString());

      if (event.event === "BILL_CREATED") {
        await Usage.findOneAndUpdate(
          {
            userId: event.userId,
          },

          {
            $inc: {
              totalBills: 1,

              totalAmount: event.amount,

              [`categories.${event.category}`]: event.amount,
            },
          },

          {
            upsert: true,
            new: true,
          },
        );

        logger.log("Usage analytics updated");
      }
    },
  });
};

module.exports = runConsumer;

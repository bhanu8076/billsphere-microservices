const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    logger.log('Usage MongoDB Connected');
  } catch (error) {
    logger.error('Usage MongoDB Connection Error:', error);

    process.exit(1);
  }
};

module.exports = connectDB;
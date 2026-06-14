require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/db');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 5001;

sequelize
  .sync()
  .then(() => {
    logger.log('PostgreSQL Connected');

    app.listen(PORT, () => {
      logger.log(`Auth Service running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('Auth Service startup failed', err);
  });
require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 5001;

sequelize
  .sync()
  .then(() => {
    console.log('PostgreSQL Connected');

    app.listen(PORT, () => {
      console.log(
        `Auth Service running on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.error(err);
  });
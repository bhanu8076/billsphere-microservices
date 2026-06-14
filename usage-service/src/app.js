const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usageRoutes = require(
  './routes/usage.routes'
);

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin:
      'http://localhost:5173',

    credentials: true,
  })
);

app.use('/api/usage', usageRoutes);

module.exports = app;
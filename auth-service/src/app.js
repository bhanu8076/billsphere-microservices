const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const session = require(
  'express-session'
);

const passport = require(
  './config/passport'
);

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret:
      process.env.JWT_SECRET,

    resave: false,

    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use('/api/auth', authRoutes);

module.exports = app;
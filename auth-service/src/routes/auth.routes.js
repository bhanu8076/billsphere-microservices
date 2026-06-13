const express = require('express');

const router = express.Router();

const authMiddleware = require(
  '../middleware/auth.middleware'
);

const {
  register,
  login,
  logout,
  getProfile,
} = require(
  '../controllers/auth.controller'
);

const authLimiter = require(
  '../middleware/rateLimiter'
);

router.post('/register', authLimiter, register);

router.post('/login', authLimiter, login);

router.post('/logout', logout);

router.get(
  '/profile',
  authMiddleware,
  getProfile
);

module.exports = router;
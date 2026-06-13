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

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get(
  '/profile',
  authMiddleware,
  getProfile
);

module.exports = router;
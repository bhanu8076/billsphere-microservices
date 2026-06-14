const express = require('express');

const router = express.Router();

const authMiddleware = require(
  '../middleware/auth.middleware'
);

const passport = require(
  'passport'
);

const jwt = require('jsonwebtoken');

const {
  register,
  login,
  logout,
  getProfile,
  getCurrentUser
} = require(
  '../controllers/auth.controller'
);

const authLimiter = require(
  '../middleware/rateLimiter'
);

router.get(
  '/google',

  passport.authenticate(
    'google',
    {
      scope: ['profile', 'email'],
    }
  )
);

router.get(
  '/google/callback',

  passport.authenticate(
    'google',
    {
      failureRedirect:
        '/login',
      session: false,
    }
  ),

  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user.id,

        email: req.user.email,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: '1d',
      }
    );

    res.cookie(
      'token',
      token,
      {
        httpOnly: true,

        secure: false,

        sameSite: 'lax',
      }
    );

    res.redirect(
      'http://localhost:5173/dashboard'
    );
  }
);

router.post('/register', authLimiter, register);

router.post('/login', authLimiter, login);

router.post('/logout', logout);

router.get(
  '/profile',
  authMiddleware,
  getProfile
);

router.get(
  '/me',
  authMiddleware,
  getCurrentUser
);

module.exports = router;
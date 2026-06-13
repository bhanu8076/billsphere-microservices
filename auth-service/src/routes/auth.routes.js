const express = require('express');

const router = express.Router();

const authMiddleware = require(
    '../middleware/auth.middleware'
);

const {
  register,
  login,
  logout
} = require('../controllers/auth.controller');

router.get(
    '/profile',
    authMiddleware,
    (req, res) => {
        res.json({
            user: req.user
        });
    }
);

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
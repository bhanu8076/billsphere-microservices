const express = require('express');

const router = express.Router();

const authMiddleware = require(
  '../middleware/auth.middleware'
);

const {
  createBill,
  getBills,
} = require(
  '../controllers/billing.controller'
);

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Billing Service is running',
  });
});

router.post(
  '/',
  authMiddleware,
  createBill
);

router.get(
  '/',
  authMiddleware,
  getBills
);

module.exports = router;
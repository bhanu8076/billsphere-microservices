const {
  redisClient,
} = require('../config/redis');
const {
  producer,
} = require('../kafka/producer');
const Bill = require('../models/Bill');

exports.createBill = async (req, res) => {
  try {
    const {
      title,
      amount,
      category,
      dueDate,
    } = req.body;

    const bill = await Bill.create({
      userId: req.user.id,
      title,
      amount,
      category,
      dueDate,
    });

    await redisClient.del(`bills:${req.user.id}`);

    await producer.send({
      topic: "bill-events",

      messages: [
        {
          value: JSON.stringify({
            event: "BILL_CREATED",

            billId: bill._id,

            userId: req.user.id,

            amount: bill.amount,

            category: bill.category,

            createdAt: bill.createdAt,
          }),
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: 'Bill created successfully',
      bill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getBills = async (req, res) => {
  try {
    const cacheKey = `bills:${req.user.id}`;

    const cachedBills =
      await redisClient.get(cacheKey);

    if (cachedBills) {
      return res.status(200).json({
        success: true,
        source: 'redis-cache',
        bills: JSON.parse(cachedBills),
      });
    }

    const bills = await Bill.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    await redisClient.setEx(
      cacheKey,
      60,
      JSON.stringify(bills)
    );

    res.status(200).json({
      success: true,
      source: 'mongodb',
      bills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
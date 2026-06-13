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
    const bills = await Bill.find({
      userId: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: bills.length,
      bills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
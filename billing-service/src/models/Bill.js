const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      enum: [
        'Electricity',
        'Internet',
        'Water',
        'Rent',
        'Others',
      ],
      default: 'Others',
    },

    dueDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ['Pending', 'Paid'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Bill', billSchema);
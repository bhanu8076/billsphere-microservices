const Usage = require(
  '../models/Usage'
);

exports.getDashboard =
  async (req, res) => {
    try {
      const usage =
        await Usage.findOne({
          userId: req.user.id,
        });

      res.json(
        usage || {
          totalBills: 0,
          totalAmount: 0,
          categories: {},
        }
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

  exports.getDashboardStats = async (
  req,
  res
) => {
  const totalBills =
    await Usage.countDocuments();

  const totalAmount =
    await Usage.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: '$amount',
          },
        },
      },
    ]);

  const categories =
    await Usage.aggregate([
      {
        $group: {
          _id: '$category',
          count: {
            $sum: 1,
          },
        },
      },
    ]);

  res.json({
    totalBills,

    totalAmount:
      totalAmount[0]?.total || 0,

    categories,
  });
};
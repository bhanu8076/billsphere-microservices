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
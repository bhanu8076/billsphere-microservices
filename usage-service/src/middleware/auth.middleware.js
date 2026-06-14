const jwt = require('jsonwebtoken');

const authMiddleware = (
  req,
  res,
  next
) => {
  try {
    const token =
      req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message:
          'Authentication required',
      });
    }

    req.user = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

module.exports = authMiddleware;
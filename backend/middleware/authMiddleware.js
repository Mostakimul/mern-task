const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const authenticateUser = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(verifyToken.id).select('-password');

      next();
    } catch (error) {
      // console.log(error);
      res.status(401);
      throw new Error('You are not authorized!');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('You are not authenticated!');
  }
});

module.exports = { authenticateUser };

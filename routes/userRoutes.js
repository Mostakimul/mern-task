const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  myProfile,
} = require('../controller/userController');
const { authenticateUser } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/my-profile', authenticateUser, myProfile);

module.exports = router;

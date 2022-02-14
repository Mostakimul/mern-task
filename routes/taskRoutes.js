const express = require('express');
const router = express.Router();
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controller/taskController');
const { authenticateUser } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(authenticateUser, getTasks)
  .post(authenticateUser, setTask);
router
  .route('/:id')
  .put(authenticateUser, updateTask)
  .delete(authenticateUser, deleteTask);

module.exports = router;

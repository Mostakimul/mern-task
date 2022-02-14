const express = require('express');
const router = express.Router();
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controller/taskController');

router.route('/').get(getTasks).post(setTask);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;

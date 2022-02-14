const asyncHandler = require('express-async-handler');

/**
 * @desc    Get tasks
 * @route   GET /api/tasks/goals
 * @access  private
 */
const getTasks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get tasks` });
});
/**
 * @desc    Set task
 * @route   POST /api/tasks
 * @access  private
 */
const setTask = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `POST task` });
});
/**
 * @desc    Update task
 * @route   PUT /api/tasks/:id
 * @access  private
 */
const updateTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update task` });
});
/**
 * @desc    DELETE task
 * @route   DELETE /api/tasks/:id
 * @access  private
 */
const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete task` });
});

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
};

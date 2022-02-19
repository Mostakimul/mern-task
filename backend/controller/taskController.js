const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const User = require('../models/userModel');
/**
 * @desc    Get tasks
 * @route   GET /api/tasks/
 * @access  private
 */
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.status(200).json(tasks);
});
/**
 * @desc    Set task
 * @route   POST /api/tasks
 * @access  private
 */
const setTask = asyncHandler(async (req, res) => {
  // check if task field is available
  if (!req.body.task) {
    res.status(400);
    throw new Error('Please add a task!');
  }

  const task = await Task.create({
    task: req.body.task,
    userId: req.user.id,
  });

  res.status(201).json(task);
});
/**
 * @desc    Update task
 * @route   PUT /api/tasks/:id
 * @access  private
 */
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found!');
  }

  // find the user
  if (!req.user) {
    res.status(401);
    throw new Error('User not exists!');
  }

  // id matching with login user
  if (task.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User is not authorized!');
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTask);
});
/**
 * @desc    DELETE task
 * @route   DELETE /api/tasks/:id
 * @access  private
 */
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error('Task not found!');
  }

  // find the user
  if (!req.user) {
    res.status(401);
    throw new Error('User not exists!');
  }

  // id matching with login user
  if (task.userId.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User is not authorized!');
  }

  await task.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
};

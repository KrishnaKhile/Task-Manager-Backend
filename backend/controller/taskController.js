const Task = require("../../models/taskModel");

// create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get all Task

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get single data

const gettask1 = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json(`no data found with id : ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete the data

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json(`No task found with id : ${id}`);
    } else {
      res.status(200).send("Task deleted");
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// update the data

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators:true,
    });
    if (!task) {
      res.status(404).json(`No task found with id : ${id}`);
    } else {
      res.status(200).json(task);
    }
    
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getTask,
  gettask1,
  deleteTask,
  updateTask,
};

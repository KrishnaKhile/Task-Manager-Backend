const express = require("express");
const Task = require("../../models/taskModel");
const { createTask, getTask, gettask1, deleteTask, updateTask } = require("../controller/taskController");

const router = express.Router()


router.post("/", createTask);
router.get("/", getTask);
router.get("/:id", gettask1);
router.delete("/:id",deleteTask)
router.put("/:id",updateTask)



module.exports = router
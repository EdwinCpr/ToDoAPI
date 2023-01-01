const Tasks = require("../models/tasks.models");

const create = async (req, res) => {
    const newTask = req.body;
    newTask.userId = req.user.id;
    try {
        const task = await Tasks.create(newTask);
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
    };
};

const getAll = async (req, res) => {
    const userId = req.user.id;
    try {
        const tasks = await Tasks.findOne({ where: { userId }, 
        attributes: ["id", "title", "description"]
    });
        res.json(tasks);
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    create,
    getAll
};
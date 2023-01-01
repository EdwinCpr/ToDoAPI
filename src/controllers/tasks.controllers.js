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
        attributes: ["id", "title", "description", "completed"]
    });
        res.json(tasks);
    } catch (error) {
        console.log(error);
    };
};

const edit = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Tasks.findByPk(id);

    if(req.user.id !== task.userId) {
        const error = new Error("No tienes permiso");
        return res.status(400).json({ msg: error.message })
    };

    try {
        const data = {
            title: title || task.title,
            description: description || task.description,
            completed: completed || task.completed
        };
        await Tasks.update(data, { where: { id } });
        res.json(data)
    } catch (error) {
        
    };
};

const delet = async (req, res) => {
    const { id } = req.params;
    const task = await Tasks.findByPk(id);

    if(req.user.id !== task.userId) {
        const error = new Error("No tienes permiso");
        return res.status(400).json({ msg: error.message })
    };

    try {
        await Tasks.destroy({ where: { id }});
        res.json({ msg: "Eliminado con exito" });
    } catch (error) {
        console.log(error);
    };
};

module.exports = {
    create,
    getAll,
    edit,
    delet
};
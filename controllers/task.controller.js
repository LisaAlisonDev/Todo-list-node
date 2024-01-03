const { Task } = require("../models");
const { Category } = require("../models");


exports.create = async (req, res, next) => {
    try {
        const { title, description, dueDate, priority, status, userId } = req.body;
        const tasks = await Task.create({ title, description, dueDate, priority, status, userId });
        res.status(200).json({
            data: tasks
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


exports.getAll = async (req, res, next) => {
    try {
        const tasks = await Task.findAll({ include: [Category] });
        res.status(200).json({
            data: tasks
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


exports.getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await Task.findByPk(id, { include: [Category] });

        res.status(200).json({
            data: task
        })

    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


exports.setById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, dueDate, priority, status } = req.body;

        await Task.update({ title: title, description: description, dueDate: dueDate, priority: priority, status: status }, {
            where: {
                id: id
            }
        });

        const task = await Task.findByPk(id)
        res.status(200).json({
            data: task
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


exports.remove = async (req, res, next) => {
    try {
        const id = req.params.id;

        const task = await Task.destroy({ where: { id } })
        res.status(200).json({
            message: "Supprimer avec succès."
        })
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}





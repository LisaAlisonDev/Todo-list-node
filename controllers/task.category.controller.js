const { Task } = require("../models");
const { Category } = require("../models");
const { TaskCategory } = require("../models")

exports.create = async (req, res, next) => {
    try {
        const { categoryId, taskId } = req.body;

        const taskCategory = await TaskCategory.create({ categoryId, taskId });
        res.status(200).json({
            data: taskCategory
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

        const taskCategory = await TaskCategory.destroy({ where: { id } })
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

const { Task } = require("../models");
const { Category } = require("../models");


exports.create = async (req, res, next) => {
    try {
        const { categoryName } = req.body;

        const category = await Category.create({ categoryName });
        res.status(200).json({
            data: category
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
        const category = await Category.findAll({ include: [Task] });
        res.status(200).json({
            data: category
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
        const task = await Category.findByPk(id, { include: [Task] });

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
        const { categoryName } = req.body;

        await Category.update({ categoryName }, {
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
        await Category.destroy({ where: { id } })
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





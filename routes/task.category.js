// wiki.js - Wiki route module.
const express = require("express");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { create, remove } = require("../controllers/task.category.controller");
const { verifyData } = require("../middlewares/validator.middleware");
const { check } = require('express-validator');

const router = express.Router();

const validationRule = [
    check('categoryId').isInt().notEmpty().withMessage('Ne doit pas être vide.'),
    check('taskId').isInt().notEmpty().withMessage('Ne doit pas être vide.')
]

router.post('/task-category', authenticateToken, validationRule, verifyData, create)

router.delete('/task-category/:id', authenticateToken, remove)

module.exports = router;
// wiki.js - Wiki route module.

const express = require("express");
const {create, getAll, getById, setById, remove } = require("../controllers/task.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { verifyData } = require("../middlewares/validator.middleware");
const { check } = require('express-validator');

const router = express.Router();

const validationRule = [
    // title, description, dueDate, priority, status, userId 
    check('title').notEmpty().withMessage('Ne doit pas être vide.'),
    check('description').notEmpty().withMessage('Ne doit pas être vide.'),
    check('dueDate').isDate().notEmpty().withMessage('Ne doit pas être vide.'),
    check('priority').isString().notEmpty().withMessage('Ne doit pas être vide.').isIn([0, 1, 2]),
    check('status').isString().notEmpty().withMessage('Ne doit pas être vide.').isIn([0, 1, 2]),
    check('userId').isInt().notEmpty().withMessage('Ne doit pas être vide.')
]

router.get('/task', authenticateToken, getAll)

router.get('/task/:id', authenticateToken, getById)

router.post('/task', authenticateToken, validationRule, verifyData, create)

router.put('/task/:id', authenticateToken, validationRule, verifyData, setById)

router.delete('/task/:id', authenticateToken, remove)

module.exports = router;
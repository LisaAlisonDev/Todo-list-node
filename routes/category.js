// wiki.js - Wiki route module.

const express = require("express");
const {create, getAll, getById, setById, remove } = require("../controllers/category.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { verifyData } = require("../middlewares/validator.middleware");
const { check } = require('express-validator');

const router = express.Router();

const validationRule = [
    check('categoryName').isString().notEmpty().withMessage('Ne doit pas être vide.')
]

router.get('/category', authenticateToken, getAll)

router.post('/category', authenticateToken, validationRule, verifyData, create)

router.delete('/category/:id', authenticateToken, remove)

router.get('/category/:id', authenticateToken, getById)

router.put('/category/:id', authenticateToken, validationRule, verifyData, setById)

module.exports = router;
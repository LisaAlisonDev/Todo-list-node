// wiki.js - Wiki route module.

const express = require("express");
const { login, refreshToken } = require("../controllers/auth.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const { create, remove } = require("../controllers/task.category.controller");
const router = express.Router();

router.post('/login', login)

router.post('/task-category', authenticateToken, create)

router.delete('/task-category/:id', authenticateToken, remove)

router.get('/refresh-token', refreshToken)

module.exports = router;
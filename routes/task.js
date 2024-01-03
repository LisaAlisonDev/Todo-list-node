// wiki.js - Wiki route module.

const express = require("express");
const {create, getAll, getById, setById, remove } = require("../controllers/task.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();


router.get('/task', authenticateToken, getAll)

router.post('/task', authenticateToken, create)

router.delete('/task/:id', authenticateToken, remove)

router.get('/task/:id', authenticateToken, getById)

router.put('/task/:id', authenticateToken, setById)

module.exports = router;
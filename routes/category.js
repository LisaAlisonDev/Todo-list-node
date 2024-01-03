// wiki.js - Wiki route module.

const express = require("express");
const {create, getAll, getById, setById, remove } = require("../controllers/category.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();


router.get('/category', authenticateToken, getAll)

router.post('/category', authenticateToken, create)

router.delete('/category/:id', authenticateToken, remove)

router.get('/category/:id', authenticateToken, getById)

router.put('/category/:id', authenticateToken, setById)

module.exports = router;
// wiki.js - Wiki route module.

const express = require("express");
const { login, refreshToken } = require("../controllers/auth.controller");
const {create, getAll, getById, setById, remove } = require("../controllers/category.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();


router.post('/login', login)

router.get('/refresh-token', refreshToken)

module.exports = router;
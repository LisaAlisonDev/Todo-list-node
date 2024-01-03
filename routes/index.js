// wiki.js - Wiki route module.

const express = require("express");
const { login, refreshToken } = require("../controllers/auth.controller");
const {create, getAll, getById, setById, remove } = require("../controllers/task.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.send("Home page");
});

// About page route.
router.get("/login", function (req, res) {
  res.send("Login page");
});

router.post("/login", login)

router.get('/task', authenticateToken, getAll)

router.post('/task', authenticateToken, create)

router.delete('/task/:id', authenticateToken, remove)

router.get('/task/:id', authenticateToken, getById)

router.put('/task/:id', authenticateToken, setById)

router.get('/refresh-token', refreshToken)

module.exports = router;
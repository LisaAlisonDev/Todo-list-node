// wiki.js - Wiki route module.

const express = require("express");
const { login, refreshToken } = require("../controllers/auth.controller");
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

router.get('/refresh-token', refreshToken)

module.exports = router;
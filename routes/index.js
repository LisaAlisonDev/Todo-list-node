// wiki.js - Wiki route module.
const express = require("express");
const { login, refreshToken } = require("../controllers/auth.controller");
const { verifyData } = require("../middlewares/validator.middleware");
const { check } = require('express-validator');

const router = express.Router();


const validationRule = [
    check('email').isEmail().trim().withMessage('Adresse email invalide.'),
    check('password').isLength({ min: 6, max: 30 }).withMessage('Le nombre de caractère du mot de passe doit être comprise entre 6 et 30 caractères')
];

router.post('/login', validationRule, verifyData, login)

router.get('/refresh-token', refreshToken)

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const loginService = require('../service/loginService')

router.get('/login', loginService);

module.exports = router;
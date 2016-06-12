'use strict';

const express = require('express');
const router = express.Router();
const loginHandle = require('../service/loginHandle')
const passwordHasherHandle = require('../service/hashingHandle')

router.get('/login', loginHandle);
router.post('/util/password', passwordHasherHandle);

module.exports = router;
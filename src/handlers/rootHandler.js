'use strict';

const express = require('express');
const router = express.Router();
const loginHandle = require('../handles/loginHandle')
const passwordHasherHandle = require('../handles/hashingHandle')

router.post('/login', loginHandle);
router.post('/util/password', passwordHasherHandle);

module.exports = router;
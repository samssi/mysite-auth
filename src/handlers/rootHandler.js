'use strict';

const express = require('express');
const router = express.Router();
const loginHandle = require('../handles/loginHandle');
const passwordHasherHandle = require('../handles/hashingHandle');
var validate = require('express-jsonschema').validate;

const passwordSchema = {
    type: "object",
    properties: {
        password: {
            type: "string",
            required: true
        }
    }
};

const loginSchema = {
    type: "object",
    properties: {
        username: {
            type: "string",
            required: true
        },
        password: {
            type: "string",
            required: true
        }
    }
};

router.post('/login', validate({body: loginSchema}), loginHandle);
router.post('/util/password', validate({body: passwordSchema}), passwordHasherHandle);



module.exports = router;
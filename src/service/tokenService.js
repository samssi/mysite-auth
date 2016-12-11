'use strict';

const jwt = require('jsonwebtoken');
const secret = 'secret';

function createToken(username) {
    return jwt.sign(constructPayload(username), secret, { expiresIn: '4h' });
}

function constructPayload(username) {
    return {
        iss: 'MySite',
        sub: 'MySite JWT token',
        username: username
    };
}

module.exports = { createToken };
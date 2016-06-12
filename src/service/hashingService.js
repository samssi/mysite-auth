'use strict';

const crypto = require('crypto');

function hashPassword(password, salt) {
    const key = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
    return key.toString('hex');
}

function randomizeSalt() {
    const bytes = crypto.randomBytes(512);
    return bytes.toString('hex');
}

function generatePasswordJson(password) {
    const randomSalt = randomizeSalt();
    const hexHash = hashPassword(password, randomSalt);
    return { password: hexHash, salt: randomSalt };
}

module.exports = { randomizeSalt, generatePasswordJson, hashPassword }
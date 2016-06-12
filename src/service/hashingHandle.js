'use strict';

const crypto = require('crypto');

function passwordHasherHandle(req, res) {
    const requestedPasswordJson = req.body;
    const password = requestedPasswordJson.password;
    res.status(200).send(generatePasswordJson(password));
}

function randomizeSalt() {
    const bytes = crypto.randomBytes(512);
    return bytes.toString('hex');
}

function generatePasswordJson(password) {
    const randomSalt = randomizeSalt();
    const hashPassword = crypto.pbkdf2Sync(password, randomSalt, 100000, 512, 'sha512');
    const hexHash = hashPassword.toString('hex');
    return { password: hexHash, salt: randomSalt };
}

module.exports = passwordHasherHandle;
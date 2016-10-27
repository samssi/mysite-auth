'use strict';

const hashingService = require('../service/hashingService');

function passwordHasherHandle(req, res) {
    const requestedPasswordJson = req.body;
    // TODO: Handle undefined
    const password = requestedPasswordJson.password;
    res.status(200).send(hashingService.generatePasswordJson(password));
}

module.exports = passwordHasherHandle;
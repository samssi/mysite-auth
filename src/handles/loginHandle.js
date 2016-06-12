'use strict';

const loginService = require('../service/loginService');

function loginHandle(req, res) {
    const loginJson = req.body;
    res.status(200).send(loginService.login(loginJson));
}

module.exports = loginHandle;
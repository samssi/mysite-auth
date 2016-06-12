'use strict';

const loginsService = require('../service/loginService');

function loginHandle(req, res) {
    res.status(200).send(loginsService.getLoginJson());
}

module.exports = loginHandle;
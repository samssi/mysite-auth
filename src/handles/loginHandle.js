"use strict";

const loginService = require("../service/loginService");

function loginHandle(req, res) {
    const loginJson = req.body;
    const login = loginService.login(loginJson);
    if (login.token === "") {
        res.status(401).send(login);
    }
    else {
        res.status(200).send(login);
    }
}

module.exports = loginHandle;
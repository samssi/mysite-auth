"use strict";

const config = require("config");
const jwt = require("jsonwebtoken");
const secret = config.get("JWT.secret");

function createToken(username) {
    return jwt.sign(constructPayload(username), secret, { expiresIn: "4h" });
}

function constructPayload(username) {
    return {
        iss: "MySite",
        sub: username
    };
}

module.exports = { createToken };
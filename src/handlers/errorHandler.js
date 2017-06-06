"use strict";

const bunyan = require("bunyan");
const logger = bunyan.createLogger({name: "mysite-auth-errorHandler"});

function errorHandler(err, req, res, next) {
    if (err.name === "JsonSchemaValidation") {
        logger.error(err.message);
        res.status(400).send("Bad request");
    }
    else {
        logger.error(err, "Internal server error!");
        res.status(500).send("Internal server error!");
    }
}

module.exports = errorHandler;
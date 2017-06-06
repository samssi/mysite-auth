"use strict";

const bunyan = require("bunyan");
const logger = bunyan.createLogger({name: "mysite-auth-loginService"});

const userhome = require("userhome");
const config = require("config");
const R = require("ramda");
const relativeFs = require("../util/relativeFs");
const hashingService = require("../service/hashingService");
const tokenService = require("./tokenService");

function login(userInput) {
    const credentialsJson = getLoginJson();
    const userCredentials = R.prop(userInput.username, credentialsJson);
    return userCredentials === undefined ? unknownUser(userInput.username) : authenticate(userInput, userCredentials);
}

function authenticate(userInput, userCredentials) {
    const hashedInputPassword = hashingService.hashPassword(userInput.password, userCredentials.salt);
    if (doesUserInputAndStoredPasswordMatch(hashedInputPassword, userCredentials.password)) {
        logger.info("Generating new token for user '%s'", userInput.username);
        return {token: tokenService.createToken(userInput.username)};
    }
    logger.warn("Wrong password entered by user '%s'", userInput.username);
    return { token: "" }
}

function unknownUser(username) {
    logger.warn("Faulty token generation attempt from user '%s'", username);
    return { token: "" };
}

function doesUserInputAndStoredPasswordMatch(hashedInputPassword, hashedStoredPassword) {
    return (hashedInputPassword == hashedStoredPassword);
}

function getLoginJson() {
    const credentialsJsonLocation = config.get("JsonStore.credentials");
    const credentialsJsonFile = relativeFs.readFileFromRelativePath(credentialsJsonLocation);
    const credentialsJson = JSON.parse(credentialsJsonFile);
    return credentialsJson;
}

module.exports = { login };
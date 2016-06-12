'use strict';

const config = require('config');
const R = require('ramda');
const relativeFs = require('../util/relativeFs');
const hashingService = require('../service/hashingService');

function login(userInput) {
    const credentialsJson = getLoginJson();
    const userCredentials = R.prop(userInput.username, credentialsJson);
    return userCredentials == undefined ? unknownUser() : authenticate(userInput, userCredentials);
}

function authenticate(userInput, userCredentials) {
    const hashedInputPassword = hashingService.hashPassword(userInput.password, userCredentials.salt);
    return { login: doesUserInputAndStoredPasswordMatch(hashedInputPassword, userCredentials.password) }
}

function unknownUser() {
    return { login: 'unknown' };
}

function doesUserInputAndStoredPasswordMatch(hashedInputPassword, hashedStoredPassword) {
    return (hashedInputPassword == hashedStoredPassword);
}

function getLoginJson() {
    const credentialsJsonLocation = config.get('jsonStore.credentials');
    const credentialsJsonFile = relativeFs.readFileFromRelativePath(credentialsJsonLocation);
    const credentialsJson = JSON.parse(credentialsJsonFile);
    return credentialsJson;
}

module.exports = { login }
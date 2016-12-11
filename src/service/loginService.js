'use strict';

const config = require('config');
const R = require('ramda');
const relativeFs = require('../util/relativeFs');
const hashingService = require('../service/hashingService');
const tokenService = require('./tokenService')

function login(userInput) {
    const credentialsJson = getLoginJson();
    const userCredentials = R.prop(userInput.username, credentialsJson);
    return userCredentials == undefined ? unknownUser(userInput.username) : authenticate(userInput, userCredentials);
}

function authenticate(userInput, userCredentials) {
    const hashedInputPassword = hashingService.hashPassword(userInput.password, userCredentials.salt);
    if (doesUserInputAndStoredPasswordMatch(hashedInputPassword, userCredentials.password)) {
        console.log('User ' + userInput.username + ': logged in.')
        return {token: tokenService.createToken(userInput.username)};
    }
    return { token: '' }
}

function unknownUser() {
    return { token: '' };
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

module.exports = { login };
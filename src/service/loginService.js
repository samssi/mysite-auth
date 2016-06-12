'use strict';

const config = require('config');
const relativeFs = require('../util/relativeFs');
const hashingService = require('../service/hashingService');

function login(userInput) {
    const loginJson = getLoginJson();
    const hashedInputPassword = hashingService.hashPassword(userInput.password, loginJson.salt);

    if (hashedInputPassword == loginJson.password) {
        return { login: true }
    }
    else {
        return { login: false }
    }
}

function getLoginJson() {
    const credentialsJsonLocation = config.get('jsonStore.credentials');
    const credentialsJsonFile = relativeFs.readFileFromRelativePath(credentialsJsonLocation);
    const credentialsJson = JSON.parse(credentialsJsonFile);
    return credentialsJson;
}

module.exports = { login }
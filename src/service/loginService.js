'use strict';

const config = require('config');
const relativeFs = require('../util/relativeFs')

function loginService(req, res) {
    res.status(200).send(getLoginJson());
}

function getLoginJson() {
    const credentialsJsonLocation = config.get('jsonStore.credentials');
    const credentialsJsonFile = relativeFs.readFileFromRelativePath(credentialsJsonLocation);
    const credentialsJson = JSON.parse(credentialsJsonFile);
    return credentialsJson;
}

module.exports = loginService;
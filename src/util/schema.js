'use strict';

exports.password = {
    type: "object",
    properties: {
        password: {
            type: "string",
            required: true
        }
    }
};

exports.login = {
        type: "object",
        properties: {
            username: {
                type: "string",
                required: true
            },
            password: {
                type: "string",
                required: true
            }
        }
};
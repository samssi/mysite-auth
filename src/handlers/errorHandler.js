'use strict';

function errorHandler(err, req, res, next) {
    console.log('error')
    res.status(500).send('Internal server error');
}

module.exports = errorHandler;
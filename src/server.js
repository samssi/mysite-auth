'use strict';

const bunyan = require('bunyan');
const logger = bunyan.createLogger({name: 'mysite-auth-server'});

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(cors());
const rootHandler = require('./handlers/rootHandler');
const errorHandler = require('./handlers/errorHandler')

app.use(helmet());
app.use(bodyParser.json());

app.use('/', rootHandler);
app.use(errorHandler);

app.listen(8100, () =>
    logger.info('Server started at port 8100')
);

module.exports = app;
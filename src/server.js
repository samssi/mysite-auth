'use strict';

const bunyan = require('bunyan');
const logger = bunyan.createLogger({name: 'mysite-auth-server'});

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const config = require('config');
const app = express();
app.use(cors());
const rootHandler = require('./handlers/rootHandler');
const errorHandler = require('./handlers/errorHandler');
const healthCheckHandler = require('./handlers/healthCheckHandler');


app.use(helmet());
app.use(bodyParser.json());

app.use('/', rootHandler);
app.use('/health-check', healthCheckHandler);
app.use(errorHandler);

const configVersion = config.get("ConfigMetadata.description") + " version: " + config.get("ConfigMetadata.version");
logger.info("Running " + configVersion);

app.listen(8100, () =>
    logger.info('Server started at port 8100')
);

module.exports = app;
'use strict';

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
    console.log('Server started at port 8100')
);

module.exports = app;
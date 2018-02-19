'use strict';
require('babel-polyfill');
const express = require('express');

const ENV = process.env.NODE_ENV || 'development';

const config = require('./config/global')[ENV];
const dbConfig = require('../database/config')[ENV];
config.mysql = dbConfig;

const expressConfig = require('./config/express');
const sequelizeConfig = require('./config/sequelize');
const graphQLConfig = require('./config/graphql');
const routesConfig = require('./config/routes');
const swaggerConfig = require('./config/swagger');

const app = express();

app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

expressConfig.init(app);
sequelizeConfig.init(app);
graphQLConfig.init(app);
routesConfig.init(app);
swaggerConfig.init(app, routesConfig);

app.listen(process.env.PORT || config.port, () => {
  console.info('********************************');
  console.info('%s is running.', config.app.name);
  console.info('Hostname: %s', config.hostname);
  console.info('Port: %s', config.port);
  console.info('Environment: %s', ENV.toLowerCase());
  console.info('Access: %s', config.baseUrl);
  console.info('********************************');
});

module.exports = app;

'use strict';
const Sequelize = require('sequelize');
const DB_POOL_CONFIG = {
  max: 5,
  min: 0,
  idle: 10000
};

var sequelize = null;

module.exports.init = initSequelize;

function initSequelize(app) {
  if (!sequelize) {
    let config = app.get('config');
    sequelize = new Sequelize(
      config.mysql.database,
      config.mysql.username,
      config.mysql.password, {
        operatorsAliases: false,
        host: config.mysql.host,
        dialect: 'mysql', // Dialect needs to be explicitly supplied as of v4.0.0
        pool: DB_POOL_CONFIG,
        // define: {
        //     timestamps: false,
        //     freezeTableName: true,
        //     underscored: true
        // }
    });

    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

  if (app) {
    app.set('sequelize', sequelize);
  }

  return sequelize;
}

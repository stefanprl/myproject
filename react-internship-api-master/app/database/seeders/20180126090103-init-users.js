'use strict';
const btoa = require('btoa');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: 'Admin', firstName: 'Just think of me as', lastName: 'GOD', password: btoa('Qwerty123'), userRoleId: 1, contactInfoId: 2 },
      { username: 'CompanyAdmin', firstName: 'Management', lastName: 'AROBS', password: btoa('Qwerty123'), userRoleId: 2, contactInfoId: 2 },
      { username: 'User', firstName: 'Simple user', lastName: 'Searching for a job', password: btoa('Qwerty123'), userRoleId: 3, contactInfoId: 2 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

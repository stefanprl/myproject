'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserJobApplications', [
      { jobId: 1, userId: 3 },
      { jobId: 2, userId: 3 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserJobApplications', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JobSkills', [
      { jobId: 1, skillId: 1, rating: 3 },
      { jobId: 1, skillId: 2, rating: 3 },
      { jobId: 1, skillId: 3, rating: 3 },
      { jobId: 1, skillId: 4, rating: 4 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JobSkills', null, {});
  }
};

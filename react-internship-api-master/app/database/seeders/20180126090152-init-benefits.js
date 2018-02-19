'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JobBenefits', [
      { id: 1, name: 'Cool teammates', jobId: 1 },
      { id: 2, name: 'Open space, open minded', jobId: 1},
      { id: 3, name: 'We have a pool table', jobId: 1},
      { id: 4, name: 'Cool teammates', jobId: 2 },
      { id: 5, name: 'Open space, open minded', jobId: 2},
      { id: 6, name: 'We have a pool table', jobId: 2},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JobBenefits', null, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserWorkExperiences', [
      {
        userId: 3,
        institution: 'AROBS - Web developer',
        description: 'Details regarding my job position',
        startDate: '2009-09-01',
        endDate: '2013-09-01'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserWorkExperiences', null, {});
  }
};

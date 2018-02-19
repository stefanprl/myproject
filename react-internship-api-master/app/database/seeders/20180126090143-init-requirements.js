'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('JobRequirements', [
      { id: 1, name: 'Played with HTML, CSS, JS before', jobId: 1 },
      { id: 2, name: 'Knows his/her ways with colors', jobId: 1},
      { id: 3, name: 'Funny and open minded', jobId: 1},
      { id: 4, name: 'Booring m******er who knows his/her way to manage an application', jobId: 2},
      { id: 5, name: '99+ years experience would be nice', jobId: 2},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('JobRequirements', null, {});
  }
};

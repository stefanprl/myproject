'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserSkills', [
      { userId: 3, skillId: 1, rating: 5 },
      { userId: 3, skillId: 2, rating: 5 },
      { userId: 3, skillId: 3, rating: 5 },
      { userId: 3, skillId: 4, rating: 3 },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserSkills', null, {});
  }
};

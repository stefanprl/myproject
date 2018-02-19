'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ContactInfos', [
      {
        id: 1,
        email: 'contact@arobs.com',
        phone: '+40777666555',
        address: 'Henri Barbusse, nr. 44-46',
        city: 'Cluj Napoca',
        countryId: 153,
        website: 'http://www.arobs.com',
        avatarUrl: 'https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png',
        about: 'Arobs is a software company based in Cluj Napoca ...'
      },
      {
        id: 2,
        email: 'vlad.tomsa@arobs.com',
        phone: '+40777666555',
        address: 'Someware in Cluj',
        city: 'Cluj Napoca',
        countryId: 153,
        website: 'https://twitter.com/tomsavlad90',
        avatarUrl: 'https://pbs.twimg.com/profile_images/880866433781116928/Hk9u0n85_400x400.jpg',
        about: 'Passionate web developer @Arobs.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ContactInfos', null, {});
  }
};

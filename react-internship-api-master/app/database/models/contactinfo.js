'use strict';
const Country = require('./index').Country;

module.exports = (sequelize, DataTypes) => {
  var ContactInfo = sequelize.define('ContactInfo', {
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Country,
        key: 'id'
      }
    },
    website: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    about: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        ContactInfo.belongsTo(models.Country, {
          foreignKey: 'countryId',
          as: 'country',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return ContactInfo;
};

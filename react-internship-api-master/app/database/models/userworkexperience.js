'use strict';
const User = require('./index').User;

module.exports = (sequelize, DataTypes) => {
  var UserWorkExperience = sequelize.define('UserWorkExperience', {
    institution: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserWorkExperience;
};

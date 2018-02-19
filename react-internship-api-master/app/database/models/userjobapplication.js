'use strict';
const Job = require('./index').Job;
const User = require('./index').User;

module.exports = (sequelize, DataTypes) => {
  var UserJobApplication = sequelize.define('UserJobApplication', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Job,
        key: 'id'
      }
    },
    isAccepted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        UserJobApplication.belongsTo(models.Job, {
          foreignKey: 'jobId',
          as: 'jobInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        UserJobApplication.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'userInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return UserJobApplication;
};

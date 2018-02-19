'use strict';
const Job = require('./index').Job;

module.exports = (sequelize, DataTypes) => {
  var JobRequirement = sequelize.define('JobRequirement', {
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Job,
        key: 'id'
      }
    },
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        JobRequirement.belongsTo(models.Job, {
          foreignKey: 'jobId',
          as: 'job',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return JobRequirement;
};

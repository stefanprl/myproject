'use strict';
const Job = require('./index').Job;

module.exports = (sequelize, DataTypes) => {
  var JobBenefit = sequelize.define('JobBenefit', {
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
        JobBenefit.belongsTo(models.Job, {
          foreignKey: 'jobId',
          as: 'job',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return JobBenefit;
};

'use strict';
const Company = require('./index').Company;

module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Company,
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Job.belongsTo(models.Company, {
          foreignKey: 'companyId',
          as: 'companyInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });

        Job.hasMany(models.JobRequirement, {
          as: 'jobRequirementInfoList'
        });

        Job.hasMany(models.JobBenefit, {
          as: 'jobBenefitInfoList'
        });

        Job.hasMany(models.JobSkill, {
          as: 'jobSkillInfoList'
        });

        Job.hasMany(models.UserJobApplication, {
          as: 'userJobApplicationInfoList'
        })
      }
    }
  });
  return Job;
};

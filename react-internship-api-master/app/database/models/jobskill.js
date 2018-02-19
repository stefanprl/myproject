'use strict';
const Job = require('./index').Job;
const Skill = require('./index').Skill;

module.exports = (sequelize, DataTypes) => {
  var JobSkill = sequelize.define('JobSkill', {
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Job,
        key: 'id'
      }
    },
    skillId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Skill,
        key: 'id'
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        JobSkill.belongsTo(models.Job, {
          foreignKey: 'jobId',
          as: 'jobInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        JobSkill.belongsTo(models.Skill, {
          foreignKey: 'skillId',
          as: 'skillInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return JobSkill;
};

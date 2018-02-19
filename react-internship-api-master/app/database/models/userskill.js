'use strict';
const User = require('./index').User;
const Skill = require('./index').Skill;

module.exports = (sequelize, DataTypes) => {
  var UserSkill = sequelize.define('UserSkill', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
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
        UserSkill.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'userInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        UserSkill.belongsTo(models.Skill, {
          foreignKey: 'skillId',
          as: 'skillInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
      }
    }
  });
  return UserSkill;
};

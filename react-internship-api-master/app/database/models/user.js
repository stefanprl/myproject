'use strict';
const UserRole = require('./index').UserRole;
const ContactInfo = require('./index').ContactInfo;

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserRole,
        key: 'id'
      }
    },
    contactInfoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ContactInfo,
        key: 'id'
      }
    },

  }, {
    classMethods: {
      associate: (models) => {
        User.belongsTo(models.UserRole, {
          foreignKey: 'userRoleId',
          as: 'userRoleInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        User.belongsTo(models.ContactInfo, {
          foreignKey: 'contactInfoId',
          as: 'contactInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        User.hasMany(models.Company, {
          as: 'companyInfoList'
        });
        User.hasMany(models.UserEducation, {
          as: 'userEducationInfoList'
        });
        User.hasMany(models.UserWorkExperience, {
          as: 'userWorkExperienceInfoList'
        });
      }
    }
  });

  return User;
};

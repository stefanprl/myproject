'use strict';
const User = require('./index').User;
const ContactInfo = require('./index').ContactInfo;

module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        Company.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'userInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });

        Company.belongsTo(models.ContactInfo, {
          foreignKey: 'contactInfoId',
          as: 'contactInfo',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        });
        Company.hasMany(models.Job, {
          as: 'jobInfoList'
        })
      }
    }
  });
  return Company;
};

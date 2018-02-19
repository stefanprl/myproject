'use strict';
const User = require('../../../database/models').User;
const UserRole = require('../../../database/models').UserRole;
const ContactInfo = require('../../../database/models').ContactInfo;
const Company = require('../../../database/models').Company;
const UserEducation = require('../../../database/models').UserEducation;
const UserWorkExperience = require('../../../database/models').UserWorkExperience;
const btoa = require('btoa');
const atob = require('atob');

const find = (params) => {
  // ToDo add validation for search criteria; ex: don't accept param 'hamburger'
  return User.findAll({
    where: { ...params },
    attributes: { exclude: ['UserRoleId', 'ContactInfoId', 'password'] }
  });
};

const findById = (id, deep) => {
  const findOptions = deep ?
    {
      include: [{
        model: UserRole,
        as: 'userRoleInfo'
      }, {
        model: ContactInfo,
        as: 'contactInfo'
      }, {
        model: Company,
        as: 'companyInfoList'
      }, {
        model: UserEducation,
        as: 'userEducationInfoList'
      }, {
        model: UserWorkExperience,
        as: 'userWorkExperienceInfoList'
      }],
    } : null;

  return User.findById(id, {
    ...findOptions,
    attributes: { exclude: ['UserRoleId', 'ContactInfoId', 'password'] }
  });
};

const create = async (user) => {
  try {
    // ToDo whis should be done on the UI
    user.password = btoa(user.password);

    const userInfo = await User.create(user);

    if (user.contactInfo) {
      const contactInfo = await ContactInfo.create(user.contactInfo)
      userInfo.setContactInfo(contactInfo);
    }

    return userInfo;
  } catch (error) {
    return error;
  }
};

const update = async (user, id) => {
  try {
    await User.update(user, { where: { id: id } });
    const userInfo = await User.findById(id);

    if (user.contactInfo) {
      const contactInfo = userInfo.contactInfoId ?
        await ContactInfo.update(user.contactInfo, { where: { id: userInfo.contactInfoId } }) :
        await ContactInfo.create(user.contactInfo);

      await userInfo.setContactInfo(contactInfo);
    }

    return userInfo;
  } catch (error) {
    return error;
  }
};

const deleteById = (id) => {
  return User.destroy({ where: { id: id } })
};

const login = ({ username, password }) => {
  // ToDo use async await
  // ToDo password should be encrypted on the UI
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject('Bad request');
    } else {
      User.find({
        where: { username },
        attributes: { exclude: ['UserRoleId', 'ContactInfoId'] }
      })
        .then((data) => {
          if (data && data.password) {
            const decryptedPassword = atob(data.password);

            if (password === decryptedPassword) {
              delete data.dataValues.password;
              resolve(data);
            } else {
              reject('Invalid credentials');
            }
          } else {
            reject('Invalid credentials');
          }
        })
        .catch((error) => reject(error));
    }
  });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findById = findById;
module.exports.login = login;
module.exports.update = update;

'use strict';
const User = require('../../../database/models').User;
const UserRole = require('../../../database/models').UserRole;

const find = (params) => {
  // ToDo add validation for search criteria; ex: don't accept param 'hamburger'
  return UserRole.findAll({
    where: { ...params },
  });
};

const findById = (id) => {
  return UserRole.findById(id, {
    include: [{
      model: User,
      as: 'usersInfoList'
    }]
  });
};

const create = (userRole) => {
  return UserRole.create(userRole);
};

const deleteById = (id) => {
  return UserRole.destroy({ where: { id: id } })
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findById = findById;

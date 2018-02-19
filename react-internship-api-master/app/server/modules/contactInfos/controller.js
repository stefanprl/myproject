'use strict';
const ContactInfo = require('../../../database/models').ContactInfo;

const find = (params) => {
  // ToDo add validation for search criteria; ex: don't accept param 'hamburger'
  return ContactInfo.findAll({
    where: { ...params },
  });
};

const findById = (id) => {
  return ContactInfo.findById(id);
};

const create = (contactInfo) => {
  return ContactInfo.create(contactInfo);
};

const update = async (contactInfo, id) => {
  await ContactInfo.update(contactInfo, { where: { id: id } });

  return ContactInfo.findById(id);
};

const deleteById = (id) => {
  return ContactInfo.destroy({ where: { id: id } })
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findById = findById;
module.exports.update = update;

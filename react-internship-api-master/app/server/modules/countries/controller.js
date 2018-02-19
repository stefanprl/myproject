'use strict';
const Country = require('../../../database/models').Country;

const find = () => {
  return Country.findAll({
    attributes: ['id', 'name'],
  });
};

const findById = (id) => {
  return Country.findById(id, {
    attributes: ['id', 'name'],
  });
};

module.exports.find = find;
module.exports.findById = findById;

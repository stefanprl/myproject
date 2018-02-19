'use strict';
const Company = require('../../../database/models').Company;
const ContactInfo = require('../../../database/models').ContactInfo;
const Job = require('../../../database/models').Job;
const User = require('../../../database/models').User;

const find = (params) => {
  // ToDo add validation for search criteria; ex: don't accept param 'hamburger'
  return Company.findAll({
    where: { ...params },
    attributes: { exclude: ['UserId'] },
    include: [{ model: ContactInfo, as: 'contactInfo' }]
  });
};

const findById = (id, deep) => {
  const findOptions = deep ?
    {
      include: [{
        model: ContactInfo,
        as: 'contactInfo'
      }, {
        model: Job,
        as: 'jobInfoList'
      }],
    } : null;

  return Company.findById(id, {
    ...findOptions,
    attributes: { exclude: ['UserId'] }
  });
};

const findByUserId = (userId) => {
  return Company.findAll({
    where: { userId: userId },
    attributes: { exclude: ['UserId'] },
    include: [{ model: ContactInfo, as: 'contactInfo' }]
  });
};

const create = async (company) => {
  try {
    const companyInfo = await Company.create(company);

    if (company.contactInfo) {
      const contactInfo = await ContactInfo.create(company.contactInfo);
      companyInfo.setContactInfo(contactInfo);
    }

    return companyInfo;
  } catch (error) {
    return error;
  }
};

const update = async (company, id) => {
  try {
    await Company.update(company, { where: { id: id } });
    const companyInfo = await Company.findById(id);

    if (company.contactInfo) {
      const contactInfo = companyInfo.contactInfoId ?
        await ContactInfo.update(company.contactInfo, { where: { id: companyInfo.contactInfoId } }) :
        await ContactInfo.create(company.contactInfo);

      await companyInfo.setContactInfo(contactInfo);
    }

    return companyInfo;
  } catch (error) {
    return error;
  }
};

const deleteById = (id) => {
  return Company.destroy({ where: { id: id } })
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findByUserId = findByUserId;
module.exports.findById = findById;
module.exports.update = update;

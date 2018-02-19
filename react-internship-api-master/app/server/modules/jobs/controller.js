const Company = require('../../../database/models').Company;
const Job = require('../../../database/models').Job;
const JobBenefit = require('../../../database/models').JobBenefit;
const JobRequirement = require('../../../database/models').JobRequirement;
const JobSkill = require('../../../database/models').JobSkill;
const Skill = require('../../../database/models').Skill;
const User = require('../../../database/models').User;
const UserJobApplication = require('../../../database/models').UserJobApplication;

const find = (params) => {
  return Job.findAll({
    where: { ...params },
    attributes: { exclude: ['CompanyId'] },
    include: [{ model: Company, as: 'companyInfo' }]
  })
};

const findById = (id) => {
  return Job.findById(id, {
    include: [{
      model: Company,
      as: 'companyInfo',
    }, {
      model: JobBenefit,
      as: 'jobBenefitInfoList',
    }, {
      model: JobRequirement,
      as: 'jobRequirementInfoList',
    }, {
      model: JobSkill,
      as: 'jobSkillInfoList',
      include: [ { model: Skill, as: 'skillInfo' } ]
    }, {
      model: UserJobApplication,
      as: 'userJobApplicationInfoList',
      include: [ { model: User, as: 'userInfo' } ],
    }],
  })
};

const create = async (job) => {
  const jobInfo = await Job.create(job);

  return jobInfo;
};

const update = async (job, id) => {
  await Job.update(job, { where: { id: id } });

  const jobInfo = await Job.findById(id);

  return jobInfo;
};

const deleteById = (id) => {
  return Job.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findById = findById;
module.exports.update = update;

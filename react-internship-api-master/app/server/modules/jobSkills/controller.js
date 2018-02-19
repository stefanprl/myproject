const JobSkill = require('../../../database/models').JobSkill;
const Job = require('../../../database/models').Job;
const Skill = require('../../../database/models').Skill;

const findById = (id) => {
  return JobSkill.findById(id, {
    include: [
      { model: Skill, as: 'skillInfo' },
      { model: Job, as: 'jobInfo' }
    ]
  })
};

const findByJobId = (jobId) => {
  return JobSkill.findAll({
    where: { jobId: jobId },
    include: [{ model: Skill, as: 'skillInfo' }]
  });
};

const create = async (jobSkill) => {
  const jobSkillInfo = await JobSkill.create(jobSkill);

  return jobSkillInfo;
};

const update = async (jobSkill, id) => {
  await JobSkill.update(jobSkill, { where: { id: id } });
  const jobSkillInfo = JobSkill.findById(id);

  return jobSkillInfo;
};

const deleteById = (id) => {
  return JobSkill.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByJobId = findByJobId;
module.exports.update = update;

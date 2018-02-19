const JobBenefit = require('../../../database/models').JobBenefit;

const findById = (id, deep) => {
  const findOptions = deep ?
    {} : null;

  return JobBenefit.findById(id, {
    ...findOptions
  })
};

const findByJobId = (jobId) => {
  return JobBenefit.findAll({
    where: { jobId: jobId }
  });
};

const create = async (job) => {
  const jobInfo = await JobBenefit.create(job);

  return jobInfo;
};

const update = async (job, id) => {
  await JobBenefit.update(job, { where: { id: id } });

  const jobInfo = await JobBenefit.findById(id);

  return jobInfo;
};

const deleteById = (id) => {
  return JobBenefit.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByJobId = findByJobId;
module.exports.update = update;

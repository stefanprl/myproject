const JobRequirement = require('../../../database/models').JobRequirement;

const findById = (id, deep) => {
  const findOptions = deep ?
    {} : null;

  return JobRequirement.findById(id, {
    ...findOptions
  })
};

const findByJobId = (jobId) => {
  return JobRequirement.findAll({
    where: { jobId: jobId }
  });
};

const create = async (job) => {
  const jobInfo = await JobRequirement.create(job);

  return jobInfo;
};

const update = async (job, id) => {
  await JobRequirement.update(job, { where: { id: id } });

  const jobInfo = await JobRequirement.findById(id);

  return jobInfo;
};

const deleteById = (id) => {
  return JobRequirement.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByJobId = findByJobId;
module.exports.update = update;

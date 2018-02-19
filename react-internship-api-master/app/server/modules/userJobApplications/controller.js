const UserJobApplication = require('../../../database/models').UserJobApplication;
const User = require('../../../database/models').User;
const Job = require('../../../database/models').Job;

const findByUserId = (userId) => {
  return UserJobApplication.findAll({
    where: { userId: userId },
    include: [{ model: Job, as: 'jobInfo' }]
  });
};

const findByJobId = (jobId) => {
  return UserJobApplication.findAll({
    where: { jobId: jobId },
    include: [{ model: User, as: 'userInfo' }]
  });
};

const create = (application) => {
  return UserJobApplication.create(application);
};

const update = async (application, id) => {
  await UserJobApplication.update(application, { where: { id: id } });
  const applicationInfo = UserJobApplication.findById(id);

  return applicationInfo;
};

const deleteById = (id) => {
  return UserJobApplication.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findByJobId = findByJobId;
module.exports.findByUserId = findByUserId;
module.exports.update = update;

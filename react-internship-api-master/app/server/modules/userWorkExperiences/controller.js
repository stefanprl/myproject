const UserWorkExperience = require('../../../database/models').UserWorkExperience;

const findById = (id) => {
  return UserWorkExperience.findById(id);
};

const findByUserId = (userId) => {
  return UserWorkExperience.findAll({
    where: { userId: userId }
  });
};

const create = (userWorkExperience) => {
  return UserWorkExperience.create(userWorkExperience);
};

const update = async (userWorkExperience, id) => {
  await UserWorkExperience.update(userWorkExperience, { where: { id: id } });
  const userWorkExperienceInfo = UserSkill.findById(id);

  return userWorkExperienceInfo;
};

const deleteById = (id) => {
  return UserWorkExperience.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByUserId = findByUserId;
module.exports.update = update;

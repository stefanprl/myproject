const UserEducation = require('../../../database/models').UserEducation;

const findById = (id) => {
  return UserEducation.findById(id);
};

const findByUserId = (userId) => {
  return UserEducation.findAll({
    where: { userId: userId }
  });
};

const create = (userEducation) => {
  return UserEducation.create(userEducation);
};

const update = async (userEducation, id) => {
  await UserEducation.update(userEducation, { where: { id: id } });
  const userEducationInfo = UserSkill.findById(id);

  return userEducationInfo;
};

const deleteById = (id) => {
  return UserEducation.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByUserId = findByUserId;
module.exports.update = update;

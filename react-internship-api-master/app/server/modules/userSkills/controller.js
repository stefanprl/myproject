const UserSkill = require('../../../database/models').UserSkill;
const User = require('../../../database/models').User;
const Skill = require('../../../database/models').Skill;

const findById = (id) => {
  return UserSkill.findById(id, {
    include: [{ model: Skill, as: 'skillInfo' }]
  })
};

const findByUserId = (userId) => {
  return UserSkill.findAll({
    where: { userId: userId },
    include: [{ model: Skill, as: 'skillInfo' }]
  });
};

const findUsersBySkillId = (skillId) => {
  return UserSkill.findAll({
    where: { skillId: skillId },
    include: [{ model: User, as: 'userInfo' }]
  });
};

const create = async (userSkill) => {
  const userSkillInfo = await UserSkill.create(userSkill);

  return userSkillInfo;
};

const update = async (userSkill, id) => {
  await UserSkill.update(userSkill, { where: { id: id } });
  const userSkillInfo = UserSkill.findById(id);

  return userSkillInfo;
};

const deleteById = (id) => {
  return UserSkill.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.findById = findById;
module.exports.findByUserId = findByUserId;
module.exports.findUsersBySkillId = findUsersBySkillId;
module.exports.update = update;

const Skill = require('../../../database/models').Skill;

const find = () => {
  return Skill.findAll();
};

const findById = (id) => {
  return Skill.findById(id)
};

const create = async (jobSkill) => {
  const jobSkillInfo = await Skill.create(jobSkill);

  return jobSkillInfo;
};

const update = async (skill, id) => {
  await Skill.update(skill, { where: { id: id } });
  const skillInfo = Skill.findById(id);

  return skillInfo;
};

const deleteById = (id) => {
  return Skill.destroy({ where: { id: id } });
};

module.exports.create = create;
module.exports.deleteById = deleteById;
module.exports.find = find;
module.exports.findById = findById;
module.exports.update = update;

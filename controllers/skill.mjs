export default function initSkillController(db) {
  // get all skills
  const getAllSkills = async (request, response) => {
    try {
      const skills = await db.Skill.findAll();
      console.log('sending all skills data to the frontend...');
      response.send(skills);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllSkillsByUsers = async (request, response) => {
    try {
      const skillsByUsers = await db.Skill.findAll({
        include: [
          db.User,
        ],
      });
      console.log(skillsByUsers[0]);
      console.log('sending all skillsByUsers data to the frontend...');
      response.send(skillsByUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllSkills,
    getAllSkillsByUsers,
  };
}

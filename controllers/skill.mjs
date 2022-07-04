export default function initSkillController(db) {
  // get all skills
  const getAllSkills = async (request, response) => {
    try {
      const skills = await db.Skill.findAll();
      console.log(skills[0]);
      console.log('sending all skills data to the frontend...');
      response.send(skills);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllSkills,
  };
}

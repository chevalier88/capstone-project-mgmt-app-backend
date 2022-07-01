export default function initProjectController(db) {
  // get all projects and each of their industries in one big response
  const getAllProjects = async (request, response) => {
    try {
      const projects = await db.Project.findAll({
        include: [
          db.Industry,
        ],
      });
      console.log(projects[0]);

      console.log('sending all projects data to the frontend...');
      response.send(projects);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllProjects,

  };
}

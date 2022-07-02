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
  const getAllOpenProjects = async (request, response) => {
    try {
      console.log('trying to get all open projects...');
      const projects = await db.Project.findAll({
        where: {
          stage: 'sourcing',
        },
        include: [
          db.Industry,
        ],
      });
      console.log(projects);

      console.log('sending all open projects data to the frontend...');
      response.send(projects);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCompletedProjectsByUser = async (request, response) => {
    try {
      console.log('trying to get all completed projects...');
      console.log(`userId: ${request.params.id}`);
      const projects = await db.Project.findAll({
        where: {
          stage: 'completed',
        },
        include: [
          db.Industry,
          db.UserProject,
        ],
      });

      console.log(projects);

      console.log('sending all completed projects data to the frontend...');
      response.send(projects);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllProjects,
    getAllOpenProjects,
    getAllCompletedProjectsByUser,
  };
}

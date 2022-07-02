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
      console.log('trying to get all completed projects by user...');
      console.log(`userId: ${request.params.id}`);
      const completedProjects = await db.UserProject.findAll({
        where: {
          userId: request.params.id,
        },
        include: {
          model: db.Project,
          where: {
            stage: 'completed',
          },
          include: db.Industry,
        },
      });

      console.log(completedProjects);
      console.log('sending all completedProjects data to the frontend...');

      response.send(completedProjects);
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
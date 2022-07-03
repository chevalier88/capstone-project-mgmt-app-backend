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
      const allProjects = await db.Project.findAll({
        where: {
          stage: 'sourcing',
        },
        include: [
          db.Industry,
          db.UserProject,
        ],
      });
      console.log(allProjects);

      console.log('sending all open allProjects data to the frontend...');
      response.send(allProjects);
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
            stage: ['payment-pending', 'completed'],
          },
          include: [
            db.Industry,
            db.UserProject,
          ],
        },
      });

      console.log(completedProjects);
      console.log('sending all completedProjects data to the frontend...');

      response.send(completedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCurrentProjectsByUser = async (request, response) => {
    try {
      console.log('trying to get all currently enrolling or in-progress projects by user...');
      console.log(`userId: ${request.params.id}`);
      const currentProjects = await db.UserProject.findAll({
        where: {
          userId: request.params.id,
        },
        include: {
          model: db.Project,
          where: {
            stage: ['sourcing', 'in-progress', 'client-review'],
          },
          include: [
            db.Industry,
            db.UserProject,
          ],
        },
      });

      console.log(currentProjects);
      console.log('sending all currentProjects data to the frontend...');

      response.send(currentProjects);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUnconfirmedProjects = async (request, response) => {
    try {
      console.log('trying to get all unconfirmed projects for Project Manager super-user...');
      console.log(`userId: ${request.params.id}`);
      const unconfirmedProjects = await db.Project.findAll({
        where: {
          stage: 'contracting',
        },
        include: [
          db.Industry,
        ],
      });

      console.log(unconfirmedProjects);
      console.log('sending all unconfirmedProjects data to the frontend...');

      response.send(unconfirmedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllProjects,
    getAllOpenProjects,
    getAllCompletedProjectsByUser,
    getAllCurrentProjectsByUser,
    getAllUnconfirmedProjects,
  };
}

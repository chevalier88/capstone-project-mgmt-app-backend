export default function initProjectController(db) {
  // get all projects and each of their industries in one big response
  const getAllProjects = async (request, response) => {
    try {
      const projects = await db.Project.findAll({
        include: [
          db.Industry,
          db.UserProject,
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

  const createNewProject = async (request, response) => {
    console.log('login controlling printing request...');
    console.log(request.body);
    try {
      const {
        name,
        summary,
        numberEngineers,
        minimumSalary,
        enrolmentDeadline,
        deliveryDeadline,
        stage,
        projectedHours,
        industryId,
        projectSkills,
        userProjects,
      } = request.body;

      const newProjectObject = {
        name,
        summary,
        noEngineersRequired: numberEngineers,
        minimumSalary,
        enrolmentDeadline,
        deliveryDeadline,
        kanbanData: {
          lanes: [
            {
              cards: [
                {
                  description: '2 Gallons of milk at the Deli store',
                  id: 'Milk',
                  label: '15 mins',
                  laneId: 'PLANNED',
                  title: 'Buy milk',
                },
                {
                  description: 'Sort out recyclable and waste as needed',
                  id: 'Plan2',
                  label: '10 mins',
                  laneId: 'PLANNED',
                  title: 'Dispose Garbage',
                },
                {
                  description: 'Can AI make memes?',
                  id: 'Plan3',
                  label: '30 mins',
                  laneId: 'PLANNED',
                  title: 'Write Blog',
                },
                {
                  description: 'Transfer to bank account',
                  id: 'Plan4',
                  label: '5 mins',
                  laneId: 'PLANNED',
                  title: 'Pay Rent',
                },
              ],
              currentPage: 1,
              disallowAddingCard: true,
              id: 'PLANNED',
              label: '20/70',
              style: {
                width: 280,
              },
              title: 'Disallowed adding card',
            },
            {
              cards: [
                {
                  description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses',
                  id: 'Wip1',
                  label: '30 mins',
                  laneId: 'WIP',
                  title: 'Clean House',
                },
              ],
              currentPage: 1,
              id: 'WIP',
              label: '10/20',
              style: {
                width: 280,
              },
              title: 'Work In Progress',
            },
            {
              cards: [],
              currentPage: 1,
              id: 'BLOCKED',
              label: '0/0',
              style: {
                width: 280,
              },
              title: 'Blocked',
            },
            {
              cards: [
                {
                  description: 'Use Headspace app',
                  id: 'Completed1',
                  label: '15 mins',
                  laneId: 'COMPLETED',
                  title: 'Practice Meditation',
                },
                {
                  description: 'Use Spreadsheet for now',
                  id: 'Completed2',
                  label: '15 mins',
                  laneId: 'COMPLETED',
                  title: 'Maintain Daily Journal',
                },
              ],
              currentPage: 1,
              id: 'COMPLETED',
              label: '2/5',
              style: {
                width: 280,
              },
              title: 'Completed',
            },
            {
              cards: [
                {
                  description: 'Track using fitbit',
                  id: 'Repeat1',
                  label: '30 mins',
                  laneId: 'REPEAT',
                  title: 'Morning Jog',
                },
              ],
              currentPage: 1,
              id: 'REPEAT',
              label: '1/1',
              style: {
                width: 280,
              },
              title: 'Repeat',
            },
            {
              cards: [
                {
                  description: 'Completed 10km on cycle',
                  id: 'Archived1',
                  label: '300 mins',
                  laneId: 'ARCHIVED',
                  title: 'Go Trekking',
                },
              ],
              currentPage: 1,
              id: 'ARCHIVED',
              label: '1/1',
              style: {
                width: 280,
              },
              title: 'Archived',
            },
            {
              cards: [
                {
                  description: 'Completed 10km on cycle',
                  id: 'Archived2',
                  label: '300 mins',
                  laneId: 'ARCHIVED2',
                  title: 'Go Jogging',
                },
              ],
              currentPage: 1,
              id: 'ARCHIVED2',
              label: '1/1',
              style: {
                width: 280,
              },
              title: 'Archived2',
            },
            {
              cards: [
                {
                  description: 'Completed 10km on cycle',
                  id: 'Archived3',
                  label: '300 mins',
                  laneId: 'ARCHIVED3',
                  title: 'Go Cycling',
                },
              ],
              currentPage: 1,
              id: 'ARCHIVED3',
              label: '1/1',
              style: {
                width: 280,
              },
              title: 'Archived3',
            },
          ],
        },
        stage,
        projectedHours,
        industryId: Number(industryId),
      };

      console.log('printing newProjectObject:');
      console.log(newProjectObject);
      console.log(projectSkills);
      console.log(userProjects);

      // const newRequest = await db.Request.create(newProjectObject);

      // const { id } = newRequest;
      // console.log(`submitted request id: ${id}`);

      // await regions.forEach((region) => {
      //   console.log(region);
      //   db.RequestRegion.create({
      //     requestId: id,
      //     regionId: Number(region),
      //   });
      // });

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };
  return {
    getAllProjects,
    getAllOpenProjects,
    getAllCompletedProjectsByUser,
    getAllCurrentProjectsByUser,
    getAllUnconfirmedProjects,
    createNewProject,
  };
}

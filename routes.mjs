import { resolve } from 'path';
import db from './models/index.mjs';

import initUserController from './controllers/user.mjs';
import initProjectController from './controllers/project.mjs';
import initSkillController from './controllers/skill.mjs';

export default function routes(app) {
  const UserController = initUserController(db);
  const ProjectController = initProjectController(db);
  const SkillController = initSkillController(db);

  // check login details
  app.post('/attemptLogin', UserController.attemptLogin);

  // get all skills
  app.get('/skills', SkillController.getAllSkills);

  // get all currently enrolled or in-progress projects
  app.get('/projects/current/:id', ProjectController.getAllCurrentProjectsByUser);

  // get all completed projects
  app.get('/projects/completed/:id', ProjectController.getAllCompletedProjectsByUser);

  // get all open projects
  app.get('/projects/open', ProjectController.getAllOpenProjects);

  // get all projects
  app.get('/projects', ProjectController.getAllProjects);

  // get all users
  app.get('/users', UserController.getAllUsers);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}

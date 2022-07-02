import { resolve } from 'path';
import db from './models/index.mjs';

import initUserController from './controllers/user.mjs';
import initProjectController from './controllers/project.mjs';

export default function routes(app) {
  const UserController = initUserController(db);
  const ProjectController = initProjectController(db);

  // check login details
  app.post('/attemptLogin', UserController.attemptLogin);

  // get all completed projects
  app.get('/projects/completed/:id', ProjectController.getAllCompletedProjectsByUser);

  // get all open projects
  app.get('/projects/open', ProjectController.getAllOpenProjects);

  // get all projects
  app.get('/projects', ProjectController.getAllProjects);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}

/*

Engineers
/signup (seed first)
/login
/:userid/projects
/search
/project/:id - GET

PM
/login
/project/:id - POST

*/

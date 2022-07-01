import { resolve } from 'path';
import db from './models/index.mjs';

import initUsersController from './controllers/user.mjs';

export default function routes(app) {
  const UsersController = initUsersController(db);

  // check login details
  app.post('/attemptLogin', UsersController.attemptLogin);

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

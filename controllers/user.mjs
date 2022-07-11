/* eslint-disable consistent-return */
export default function initUserController(db) {
  const attemptLogin = async (request, response) => {
    console.log('login attempted');
    try {
      // run the query into User DB
      const user = await db.User.findOne({
        where: {
          username: request.body.username,
        },
        include: [
          db.Industry,
          db.Skill,
        ],
      });
      // set default response obj
      const responseObj = { status: false, user: {} };

      if (user != null && user.dataValues.password === request.body.password) {
        console.log('login succesful');
        // change response object
        responseObj.status = true;
        responseObj.user = user;
        return response.send(responseObj);
      }
      response.send(responseObj);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async (request, response) => {
    console.log('getting all users...');
    try {
      const users = await db.User.findAll({
        include: [
          db.Skill,
        ],
      });
      console.log(users[0]);
      console.log('sending all users data to the frontend...');
      response.send(users);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    attemptLogin,
    getAllUsers,
  };
}

/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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
      const responseObj = { status: false, user: {}, token: '' };

      if (user != null && user.dataValues.password === request.body.password) {
        console.log('login succesful');
        const accessToken = Jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);
        // change response object
        responseObj.status = true;
        responseObj.user = user;
        responseObj.token = accessToken;
        return response.send(responseObj);
      }
      response.send(responseObj);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async (request, response) => {
    console.log('getting user data');
    // getting access token from cookies in http request header
    const { token } = request.cookies;
    // verifying and getting user id from JWT
    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, loggedUser) => {
      if (err) return response.status(500).json({ error: 'failed to authenticate token' });
      try {
      // run the query into User DB
        const user = await db.User.findOne({
          where: {
            id: loggedUser,
          },
          include: [
            db.Industry,
            db.Skill,
          ],
        });
        if (user != null) {
          console.log('user is logged in');
          return response.send(user);
        }
        response.send();
      } catch (error) {
        console.log(error);
      }
    });
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

  const updateUser = async (request, response) => {
    console.log('attempting to update user');
    console.log(request.body);
    try {
      const {
        name,
        email,
        location,
        aboutMe,
        experience,
        industryId,
        portfolioURL,
        minimumSalary,
      } = request.body;

      const newUserInfo = {
        name,
        email,
        location,
        aboutMe,
        experience,
        portfolioURL,
        minimumSalary,
        industryId: Number(industryId),
      };

      // update into in User DB
      const updatedUser = await db.User.update(newUserInfo, { where: { id: request.params.id } });

      // update M:M table User_Skills
      const deleteUserSkills = await db.UserSkill.destroy(
        { where: { userId: request.params.id } },
      );
      const { skills } = request.body;
      await skills.forEach((skill) => {
        db.UserSkill.create({
          userId: request.params.id,
          skillId: skill.id,
        });
      });

      response.sendStatus(200);
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  return {
    attemptLogin,
    getUserData,
    getAllUsers,
    updateUser,
  };
}

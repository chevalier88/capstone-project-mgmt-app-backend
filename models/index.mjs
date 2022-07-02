import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initIndustryModel from './industry.mjs';
import initUserModel from './user.mjs';
import initProjectModel from './project.mjs';
import initUserProjectModel from './userProject.mjs';
import initCommentModel from './comment.mjs';
import initSkillModel from './skill.mjs';
import initUserSkillModel from './userSkill.mjs';
import initProjectSkillModel from './projectSkill.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Industry = initIndustryModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Project = initProjectModel(sequelize, Sequelize.DataTypes);
db.UserProject = initUserProjectModel(sequelize, Sequelize.DataTypes);
db.Comment = initCommentModel(sequelize, Sequelize.DataTypes);
db.Skill = initSkillModel(sequelize, Sequelize.DataTypes);
db.UserSkill = initUserSkillModel(sequelize, Sequelize.DataTypes);
db.ProjectSkill = initProjectSkillModel(sequelize, Sequelize.DataTypes);

db.User.belongsTo(db.Industry);
db.Industry.hasMany(db.User);

db.Project.belongsTo(db.Industry);
db.Industry.hasMany(db.Project);

db.User.belongsToMany(db.Project, { through: db.UserProject });
db.Project.belongsToMany(db.User, { through: db.UserProject });

db.User.hasMany(db.UserProject);
db.UserProject.belongsTo(db.User);
db.Project.hasMany(db.UserProject);
db.UserProject.belongsTo(db.Project);

db.User.belongsToMany(db.Project, { through: db.Comment });
db.Project.belongsToMany(db.User, { through: db.Comment });

/*
To access the "text" attribute from the through (aka join) table "comments",
we need to define one-to-many associations from the through table to each of its associated tables.
We would need to define additional one-to-many relationships between
the comments table and the users and projects tables respectively.
*/
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
db.Project.hasMany(db.Comment);
db.Comment.belongsTo(db.Project);

db.User.belongsToMany(db.Skill, { through: db.UserSkill });
db.Skill.belongsToMany(db.User, { through: db.UserSkill });

db.Project.belongsToMany(db.Skill, { through: db.ProjectSkill });
db.Skill.belongsToMany(db.Project, { through: db.ProjectSkill });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const startingUsers = [
      {
        username: 'quahzhengjie',
        password: 'abc123',
        name: 'Zheng Jie QUAH',
        email: 'quahzhengjie@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: '',
        minimum_salary: 30.0,
        portfolio_url: 'https://github.com/quahzhengjie',
        about_me: 'hi i am an engineer',
        experience: 'i am an automation expert and a full-stack software engineer',
        industry_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // {
      //   username: 'woof',
      //   password: 'abc123',
      //   name: 'Eric FOO',
      //   email: 'fooshida@gmail.com',

      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ];
    queryInterface.bulkInsert('skills', startingUsers);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};

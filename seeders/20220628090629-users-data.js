module.exports = {
  up: async (queryInterface) => {
    const startingUsers = [
      {
        username: 'quahzhengjie',
        password: 'abc123',
        name: 'Zheng Jie (Zack) Quah',
        email: 'quahzhengjie@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: '',
        minimum_salary: 40.0,
        portfolio_url: 'https://github.com/quahzhengjie',
        about_me: 'hi i am an engineer',
        experience: 'i am an automation expert and a full-stack software engineer',
        industry_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'woof',
        password: 'abc123',
        name: 'Eric Foo',
        email: 'fooshida@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: '',
        minimum_salary: 40.0,
        portfolio_url: 'https://https://github.com/EricFooSD',
        about_me: 'hi i am an engineer',
        experience: 'i am a product manager and a full-stack software engineer',
        industry_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'chevalier88',
        password: 'abc123',
        name: 'Graham Lim',
        email: 'graham.lim88@gmail.com',
        location: 'Singapore',
        account_type: 'engineer',
        profile_photo: '',
        minimum_salary: 40.0,
        portfolio_url: 'https://github.com/chevalier88',
        about_me: 'hi i am an engineer',
        experience: 'i am an algorithmic trader and a full-stack software engineer',
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('users', startingUsers);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null);
  },
};

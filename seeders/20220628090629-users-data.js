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
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://github.com/quahzhengjie',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am an automation expert and a full-stack software engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
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
        profile_photo: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://https://github.com/EricFooSD',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am a product manager.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
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
        profile_photo: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://github.com/chevalier88',
        about_me: 'Hi i am an engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
        experience: 'I am an algorithmic trader and a full-stack software engineer.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus neque, consectetur a urna eget, fringilla vehicula ante. Nam id euismod ligula, vitae lobortis eros.',
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

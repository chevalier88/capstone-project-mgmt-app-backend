module.exports = {
  up: async (queryInterface) => {
    const data3 = {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          label: '2/2',
          cards: [
            {
              id: 'Card1', title: 'placeholder_1', description: 'bla bla', label: '30 mins', draggable: false,
            },
            {
              id: 'Card2', title: 'placeholder_2', description: 'lorem ipsum', label: '5 mins', metadata: { sha: 'be312a1' },
            },
          ],
        },
        {
          id: 'lane2',
          title: 'Completed',
          label: '0/0',
          cards: [],
        },
      ],
    };
    const data4 = {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          label: '2/2',
          cards: [
            {
              id: 'Card1', title: 'placeholder_1', description: 'bla bla', label: '30 mins', draggable: false,
            },
            {
              id: 'Card2', title: 'placeholder_2', description: 'lorem ipsum', label: '5 mins', metadata: { sha: 'be312a1' },
            },
          ],
        },
        {
          id: 'lane2',
          title: 'Completed',
          label: '0/0',
          cards: [],
        },
      ],
    };
    const moreProjects = [
      {
        name: 'Algorithmic Trading App',
        summary: 'A Finance Client wants to build a cryptocurrency algorithmic trading app.',
        no_engineers_required: 1,
        minimum_salary: 90.00,
        enrolment_deadline: new Date('September 30, 2022 00:00:00'),
        delivery_deadline: new Date('December 10, 2022 00:00:00'),
        kanban_data: JSON.stringify(data3),
        stage: 'completed',
        projected_hours: 80,
        actual_hours: 80,
        industry_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'eCommerce App',
        summary: 'A tech client wants to build an eCommerce App.',
        no_engineers_required: 2,
        minimum_salary: 40.00,
        enrolment_deadline: new Date('September 17, 2022 00:00:00'),
        delivery_deadline: new Date('January 10, 2023 00:00:00'),
        kanban_data: JSON.stringify(data4),
        stage: 'in-progress',
        projected_hours: 80,
        actual_hours: 0,
        industry_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const moreUsers = [
      {
        username: 'project_manager',
        password: 'abc123',
        name: 'Graham Lim',
        email: 'graham.lim2018@gmail.com',
        location: 'Singapore',
        account_type: 'manager',
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        minimum_salary: 40.0,
        portfolio_url: 'https://github.com/chevalier88',
        about_me: 'Hi, I am a Project Manager!',
        experience: 'I scope out client needs before sourcing talented engineers to build the code out for us.',
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: 'leeroy_jenkins',
        password: 'abc123',
        name: 'Leeroy Jenkins',
        email: 'fakeemail@gmail.com',
        location: 'Singapore',
        account_type: 'client',
        profile_photo: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        minimum_salary: 0.0,
        portfolio_url: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
        about_me: 'I want people to code for me, and I will pay a reasonable amount.',
        experience: 'Lots of experience telling people what to do for money.',
        industry_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    const moreUserProjects = [
      {
        user_id: 3,
        project_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        project_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        project_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await Promise.all([
      queryInterface.bulkInsert('projects', moreProjects),
      queryInterface.bulkInsert('users', moreUsers),
    ]);
    await queryInterface.bulkInsert('user_projects', moreUserProjects);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_projects');
    await Promise.all([
      queryInterface.dropTable('users'),
      queryInterface.dropTable('projects'),
    ]);
  },
};

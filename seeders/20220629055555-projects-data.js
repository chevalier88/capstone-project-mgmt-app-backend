module.exports = {
  up: async (queryInterface) => {
    const data1 = {
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
    const data2 = {
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
    const startingProjects = [
      {
        name: 'Leave Application App',
        summary: 'A HR Client is looking to build a leave application app where users will be able to submit, approve and plan their leave in an enterprise.',
        no_engineers_required: 3,
        minimum_salary: 45.00,
        enrolment_deadline: new Date('September 1, 2022 00:00:00'),
        delivery_deadline: new Date('December 1, 2022 00:00:00'),
        kanban_data: JSON.stringify(data1),
        stage: 'sourcing',
        projected_hours: 120,
        actual_hours: 0,
        industry_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Job Application App',
        summary: 'A Market Research Client is looking to build a job application app where users will be able to apply for jobs, and this data can be tracked.',
        no_engineers_required: 2,
        minimum_salary: 25.00,
        enrolment_deadline: new Date('September 2, 2022 00:00:00'),
        delivery_deadline: new Date('December 15, 2022 00:00:00'),
        kanban_data: JSON.stringify(data2),
        stage: 'sourcing',
        projected_hours: 80,
        actual_hours: 0,
        industry_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('projects', startingProjects);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('projects', null);
  },
};

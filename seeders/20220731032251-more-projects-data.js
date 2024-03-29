/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {
    const kanbanData = {
      lanes: [
        {
          cards: [
            {
              description: '2 Gallons of milk at the Deli store',
              id: 'Milk',
              label: '15 mins',
              laneId: 'PLANNED',
              title: 'Buy milk',
            },
            {
              description: 'Sort out recyclable and waste as needed',
              id: 'Plan2',
              label: '10 mins',
              laneId: 'PLANNED',
              title: 'Dispose Garbage',
            },
            {
              description: 'Can AI make memes?',
              id: 'Plan3',
              label: '30 mins',
              laneId: 'PLANNED',
              title: 'Write Blog',
            },
            {
              description: 'Transfer to bank account',
              id: 'Plan4',
              label: '5 mins',
              laneId: 'PLANNED',
              title: 'Pay Rent',
            },
          ],
          currentPage: 1,
          disallowAddingCard: true,
          id: 'PLANNED',
          label: '20/70',
          style: {
            width: 280,
          },
          title: 'Disallowed adding card',
        },
        {
          cards: [
            {
              description: 'Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses',
              id: 'Wip1',
              label: '30 mins',
              laneId: 'WIP',
              title: 'Clean House',
            },
          ],
          currentPage: 1,
          id: 'WIP',
          label: '10/20',
          style: {
            width: 280,
          },
          title: 'Work In Progress',
        },
        {
          cards: [],
          currentPage: 1,
          id: 'BLOCKED',
          label: '0/0',
          style: {
            width: 280,
          },
          title: 'Blocked',
        },
        {
          cards: [
            {
              description: 'Use Headspace app',
              id: 'Completed1',
              label: '15 mins',
              laneId: 'COMPLETED',
              title: 'Practice Meditation',
            },
            {
              description: 'Use Spreadsheet for now',
              id: 'Completed2',
              label: '15 mins',
              laneId: 'COMPLETED',
              title: 'Maintain Daily Journal',
            },
          ],
          currentPage: 1,
          id: 'COMPLETED',
          label: '2/5',
          style: {
            width: 280,
          },
          title: 'Completed',
        },
        {
          cards: [
            {
              description: 'Track using fitbit',
              id: 'Repeat1',
              label: '30 mins',
              laneId: 'REPEAT',
              title: 'Morning Jog',
            },
          ],
          currentPage: 1,
          id: 'REPEAT',
          label: '1/1',
          style: {
            width: 280,
          },
          title: 'Repeat',
        },
        {
          cards: [
            {
              description: 'Completed 10km on cycle',
              id: 'Archived1',
              label: '300 mins',
              laneId: 'ARCHIVED',
              title: 'Go Trekking',
            },
          ],
          currentPage: 1,
          id: 'ARCHIVED',
          label: '1/1',
          style: {
            width: 280,
          },
          title: 'Archived',
        },
        {
          cards: [
            {
              description: 'Completed 10km on cycle',
              id: 'Archived2',
              label: '300 mins',
              laneId: 'ARCHIVED2',
              title: 'Go Jogging',
            },
          ],
          currentPage: 1,
          id: 'ARCHIVED2',
          label: '1/1',
          style: {
            width: 280,
          },
          title: 'Archived2',
        },
        {
          cards: [
            {
              description: 'Completed 10km on cycle',
              id: 'Archived3',
              label: '300 mins',
              laneId: 'ARCHIVED3',
              title: 'Go Cycling',
            },
          ],
          currentPage: 1,
          id: 'ARCHIVED3',
          label: '1/1',
          style: {
            width: 280,
          },
          title: 'Archived3',
        },
      ],
    };

    const moreProjectsArray = [];
    const moreProjectsSkillsArray = [];

    for (let i = 5; i < 16; i++) {
    // adds more projects starting from i = 5, because we already have 4 projects
      moreProjectsArray.push({
        name: `${faker.name.jobTitle()} ${faker.animal.dog()} App`,
        summary: faker.lorem.sentence(),
        no_engineers_required: Math.ceil(Math.random() * 5),
        minimum_salary: 45.00,
        enrolment_deadline: new Date('October 30, 2022 00:00:00'),
        delivery_deadline: new Date('December 30, 2022 00:00:00'),
        kanban_data: JSON.stringify(kanbanData),
        stage: 'sourcing',
        projected_hours: 150,
        actual_hours: 0,
        industry_id: Math.ceil(Math.random() * 5),
        created_at: new Date(),
        updated_at: new Date(),
      });

      moreProjectsSkillsArray.push({
        project_id: i,
        skill_id: Math.ceil(Math.random() * 10),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('projects', moreProjectsArray);

    await queryInterface.bulkInsert(
      'project_skills',
      moreProjectsSkillsArray,
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('project_skills', null);
    await queryInterface.bulkDelete('projects', null);
  },
};

module.exports = {
  up: async (queryInterface) => {
    const startingComments = [
      {
        user_id: 1,
        project_id: 1,
        comment: 'wow what a doge',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        project_id: 1,
        comment: 'yeah dude dogeness is a fact.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('comments', startingComments);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('comments', null);
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'comments',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        // New: quantity is a non-foreign-key attribute in the through table.
        // To access this attribute in our app, we will want a Comment model.
        comment: {
          type: Sequelize.TEXT,
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        project_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'projects',
            key: 'id',
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('comments');
  },
};

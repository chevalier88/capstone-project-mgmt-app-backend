module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'projects',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        summary: {
          type: Sequelize.STRING,
        },
        no_engineers_required: {
          type: Sequelize.INTEGER,
        },
        minimum_salary: {
          type: Sequelize.DECIMAL(10, 2),
        },
        enrolment_deadline: {
          type: Sequelize.DATE,
        },
        delivery_deadline: {
          type: Sequelize.DATE,
        },
        kanban_data: {
          type: Sequelize.JSON,
        },
        stage: {
          type: Sequelize.ENUM('contracting', 'sourcing', 'in-progress', 'client-review', 'payment-pending', 'completed'),
        },
        projected_hours: {
          type: Sequelize.INTEGER,
        },
        actual_hours: {
          type: Sequelize.INTEGER,
        },
        industry_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'industries',
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
    await queryInterface.createTable('user_projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
    });
    await queryInterface.createTable('user_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'skills',
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
    });
    await queryInterface.createTable('project_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'projects',
          key: 'id',
        },
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'skills',
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('projects');
    await queryInterface.dropTable('user_projects');
    await queryInterface.dropTable('user_skills');
    await queryInterface.dropTable('project_skills');
  },
};

export default function initCommentModel(sequelize, DataTypes) {
  return sequelize.define(
    'comment',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'project',
          key: 'id',
        },
      },
      text: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    { underscored: true },
  );
}

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, { foreignKey: 'UserId' });
      Task.belongsTo(models.Tag, { foreignKey: 'TagId' });
      Task.hasMany(models.Subtask, { foreignKey: 'TaskId' });
    }
  }
  Task.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'UserId is required',
          },
          notEmpty: {
            msg: 'UserId is required',
          },
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Title is required',
          },
          notEmpty: {
            msg: 'Title is required',
          },
        },
      },
      description: DataTypes.TEXT,
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Due date is required',
          },
          notEmpty: {
            msg: 'Due date is required',
          },
        },
      },
      status: DataTypes.STRING,
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'TagId is required',
          },
          notEmpty: {
            msg: 'TagId is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
    }
  );
  Task.beforeCreate((task) => {
    task.status = 'pending';
  });
  return Task;
};

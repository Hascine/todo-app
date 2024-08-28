'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subtask.belongsTo(models.Task, { foreignKey: 'TaskId' });
    }
  }
  Subtask.init(
    {
      TaskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'TaskId is required',
          },
          notEmpty: {
            msg: 'TaskId is required',
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
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Subtask',
    }
  );
  Subtask.beforeCreate((subtask) => {
    subtask.status = 'pending';
  });
  return Subtask;
};

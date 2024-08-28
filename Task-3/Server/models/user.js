'use strict';
const { hash } = require('../helpers/bcrypt');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { foreignKey: 'UserId' });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Name is required',
          },
          notEmpty: {
            msg: 'Name is required',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Email already exists',
        },
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email is required',
          },
          notEmpty: {
            msg: 'Email is required',
          },
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required',
          },
          notEmpty: {
            msg: 'Password is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  User.beforeCreate((user) => {
    user.password = hash(user.password, 10);
  });
  return User;
};

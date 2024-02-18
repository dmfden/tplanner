'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.Project, {
        foreignKey: 'projectId'
      });
      // define association here
    }
  }
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    deadline: {
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: true
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      field: 'is_done',
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Tasks',
    tableName: 'tasks',
    underscored: true
  });
  return Task;
};
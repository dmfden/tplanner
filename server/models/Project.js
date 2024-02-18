'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      });

      Project.hasMany(models.Task, {
        foreignKey: 'projectId'
      });
      // define association here
    }
  }
  Project.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    color: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    underscored: true
  });
  return Project;
};
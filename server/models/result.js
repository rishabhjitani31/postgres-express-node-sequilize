'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    performance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feedback: {
      type: DataTypes.STRING,
      allowNull: false
    },
    feedbackStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes,
      allowNull: false
    }
  });
  return Result;
};
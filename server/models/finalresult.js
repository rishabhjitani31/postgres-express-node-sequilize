'use strict';
module.exports = (sequelize, DataTypes) => {
  const FinalResult = sequelize.define('FinalResult', {
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
    feedBackStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes,
      allowNull: true
    }
  });
  return FinalResult;
};
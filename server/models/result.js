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
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Result;
};
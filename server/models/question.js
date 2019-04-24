'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    questionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Question.associate = (models) => {
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
      as: 'answerOptions',
    });
  };
  return Question;
};
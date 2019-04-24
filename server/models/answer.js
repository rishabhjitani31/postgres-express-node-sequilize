'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    answerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    istrue: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: 'questionId',
      onDelete: 'CASCADE',
    });
  };
  return Answer;
};

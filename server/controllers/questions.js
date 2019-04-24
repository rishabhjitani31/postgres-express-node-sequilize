const Question = require('../models').Question;
const Answer = require('../models').Answer;

module.exports = {
  create(req, res) {
    return Question
      .create({
        questionName: req.body.questionName,
      })
      .then((question) => {
        console.log('res', res)
        res.status(201).send(question)
      })
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Question
      .findAll({
        include: [{
          model: Answer,
          as: 'answerOptions',
        }],
        // order: [
        //   ['createdAt', 'DESC'],
        //   //[{ model: Answer, as: 'answerOptions' }, 'createdAt', 'ASC'],
        // ],
      })
      .then((question) => {
        res.status(200).send(question)
      })
      .catch((error) => {
        console.log('error', error)
        res.status(400).send(error)
      });
  },

  retrieve(req, res) {
    return Question
      .findById(req.params.questionId, {
        include: [{
          model: Answer,
          as: 'answerOptions',
        }],
      })
      .then((question) => {
        if (!question) {
          return res.status(404).send({
            message: 'Question Not Found',
          });
        }
        return res.status(200).send(question);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Question
      .findById(req.params.questionId, {
        include: [{
          model: Answer,
          as: 'answerOptions',
        }],
      })
      .then(question => {
        if (!question) {
          return res.status(404).send({
            message: 'Question Not Found',
          });
        }
        return question
          .update({
            questionName: req.body.questionName || question.questionName,
          })
          .then(() => res.status(200).send(question))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Question
      .findById(req.params.questionId)
      .then(question => {
        if (!question) {
          return res.status(400).send({
            message: 'Question Not Found',
          });
        }
        return question
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

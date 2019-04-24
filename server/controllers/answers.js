const Answer = require('../models').Answer;

module.exports = {
  create(req, res) {
    return Answer
      .create({
        answerName: req.body.answerName,
        istrue: req.body.istrue,
        questionId: req.params.questionId,
      })
      .then(answer => res.status(201).send(answer))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Answer
      .find({
        where: {
          id: req.params.answerId,
          questionId: req.params.questionId,
        },
      })
      .then(answer => {
        if (!answer) {
          return res.status(404).send({
            message: 'Answer Not Found',
          });
        }

        return answer
          .update({
            answerName: req.body.answerName || answer.content,
            istrue: req.body.istrue || answer.istrue,
          })
          .then(updatedAnswer => res.status(200).send(updatedAnswer))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Answer
      .find({
        where: {
          id: req.params.answerId,
          questionId: req.params.questionId,
        },
      })
      .then(answer => {
        if (!answer) {
          return res.status(404).send({
            message: 'Answer Not Found',
          });
        }

        return answer
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};

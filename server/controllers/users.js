const User = require('../models').Users;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
      })
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll()
      .then((user) => {
        res.status(200).send(user)
      })
      .catch((error) => {
        console.log('error', error)
        res.status(400).send(error)
      });
  },

  // retrieve(req, res) {
  //   return Question
  //     .findById(req.params.questionId, {
  //       include: [{
  //         model: Answer,
  //         as: 'answerOptions',
  //       }],
  //     })
  //     .then((question) => {
  //       if (!question) {
  //         return res.status(404).send({
  //           message: 'Question Not Found',
  //         });
  //       }
  //       return res.status(200).send(question);
  //     })
  //     .catch((error) => res.status(400).send(error));
  // },
};

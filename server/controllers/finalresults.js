const FinalResult = require('../models').FinalResult;

module.exports = {
  create(req, res) {
    return FinalResult
      .create({
        email: req.body.email,
        feedback: req.body.feedback,
        performance: req.body.performance,
        feedBackStatus: req.body.feedBackStatus,
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age
      })
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return FinalResult
      .findAll()
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((error) => {
        res.status(400).send(error)
      });
  },

  destroy(req, res) {
    return FinalResult
      .findById(req.params.resultId)
      .then(result => {
        if (!result) {
          return res.status(400).send({
            message: 'Result Not Found',
          });
        }
        return result
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

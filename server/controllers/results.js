const Result = require('../models').Result;

module.exports = {
  create(req, res) {
    let performance = '';
    const score = req.body.score;
    if (0 <= score && score <= 3) {
      performance = 'below average';
    } else if (3 <= score && score <= 6) {
      performance = 'average';
    } else if (6 <= score && score <= 9) {
      performance = 'good';
    } else {
      performance = 'excellent';
    }
    return Result
      .create({
        email: req.body.email,
        score: req.body.score,
        performance: performance,
      })
      .then((result) => {
        console.log('result', result)
        res.status(201).send(result)
      })
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Result
      .findAll()
      .then((result) => {
        res.status(200).send(result)
      })
      .catch((error) => {
        console.log('error', error)
        res.status(400).send(error)
      });
  },
  destroy(req, res) {
    return Result
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

const FinalResult = require('../models').FinalResult;
const axios = require('axios');

module.exports = {
  create(req, res) {
    return FinalResult
      .create({
        email: req.body.email,
        feedback: req.body.feedback,
        performance: req.body.performance,
        feedBackStatus: req.body.feedBackStatus,
        name: req.body.name,
        answers: req.body.answers,
      })
      .then((result) => {
        res.status(200).send(result)
        console.log('Email sent: ' + info.response);
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

  regionDomain(req, res) {
    axios({
      method: 'get',
      url: 'https://ipapi.co/json/',
    })
      .then(function (response) {
        console.log('response', response)
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        res.send(error)
      });
  },
};

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

  retrieve(req, res) {
    return User
      .find({
        where: {
          username: req.query.username,
          password: req.query.password
        }
      })
      .then((user) => {
        if (!user) {
          return res.status(200).send({
            message: 'User not found or password is invalid',
            valid: false,
            data: {}
          });
        }
        return res.status(200).send({
          message: 'Entered user is a registered one',
          valid: true,
          data: user,
        });
      })
      .catch((error) => res.status(400).send(error));
  },
};

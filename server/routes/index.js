const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const questions = require('../controllers').questions;
const answers = require('../controllers').answers;
const results = require('../controllers').results;
const users = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));

  /**Question Answers routes */
  app.post('/api/questions', questions.create);
  app.get('/api/questions', questions.list);
  app.get('/api/questions/:questionId', questions.retrieve);
  app.put('/api/questions/:questionId', questions.update);
  app.delete('/api/questions/:questionId', questions.destroy);

  app.post('/api/questions/:questionId/answers', answers.create);
  app.put('/api/questions/:questionId/answers/:answerId', answers.update);
  app.delete(
    '/api/questions/:questionId/answers/:answerId', answers.destroy
  );
  app.post('/api/results', results.create);
  app.get('/api/results', results.list);
  app.delete('/api/results/:resultId', results.destroy);

  /**Users crud api*/
  app.post('/api/users', users.create);
  app.get('/api/usersvalidate', users.list);
  app.get('/api/usersvalidationdata', users.retrieve);

  app.all('/api/questions/:questionId/answers', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};

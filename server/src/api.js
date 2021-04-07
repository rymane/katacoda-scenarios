const express = require('express');
const TodoController = require('./controllers/TodoController');
const TodoPolicy = require('./policies/TodoPolicy');

const api = express();
api.use(express.json());

api.post('/api/todos',
  TodoPolicy.validateName,
  TodoController.create);

api.get('/api/todos',
  TodoController.index);

api.get('/api/todos/:id',
  TodoPolicy.validateID,
  TodoController.show);

api.delete('/api/todos/:id',
  TodoPolicy.validateID,
  TodoController.delete);

module.exports = api;
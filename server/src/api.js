const express = require('express');
const TodoController = require('./controllers/TodoController');
const TodoPolicy = require('./policies/TodoPolicy');

// Creates an Express application
const api = express();

// Parses incoming requests with JSON payloads
api.use(express.json());

// Defines the applications API endpoints
api.post('/api/todos',
    TodoPolicy.validateName,
    TodoController.create);

api.get('/api/todos/:id',
    TodoPolicy.validateID,
    TodoController.get);

api.delete('/api/todos/:id',
    TodoPolicy.validateID,
    TodoController.delete);

// Export the application
module.exports = api;

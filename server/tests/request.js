// Import the supertest module and the API server
const request = require('supertest');
const api = require('../src/api');

// Define and export three functions used to send testing requests
// to the servers three API enpoints.
module.exports = {
  createTodo: (body) => request(api).post('/api/todos').send(body),
  deleteTodo: (id) => request(api).delete(`/api/todos/${id}`),
  getTodo: (id) => request(api).get(`/api/todos/${id}`),
};

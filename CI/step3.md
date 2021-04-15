
#### Installation

Install Jest and Supertest with npm:  
`npm install jest supertest --save-dev`{{execute}}

    "test": "jest"


Next, add define a new scripts in the file `package.json`.

    "scripts": {
      ...
      "test": "jest",
      ...
    },

We can now run `npm run test`{{execute}} to execute the tests. However, since we have not written any tests yet, the command will raise an error.

#### Writing tests

Create a test directory `mkdir tests`{{execute}}  
Enter the directory `cd tests`{{execute}}  
Create two files `touch api.test.js request.js`{{execute}}


<pre class="file" data-filename="tests/request.js" data-target="replace">
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
</pre>

<pre class="file" data-filename="katacoda-scenarios/server/tests/api.test.js" data-target="replace">
const { createTodo, deleteTodo, getTodo } = require('./request');

describe('Todo endpoints - create', () => {
  it('add todo with valid name', async () => {
    const user = {name: 'New Todo'};
    const {body, statusCode} = await createTodo(user);
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body.name).toBe(user.name);
  });
  it('add todo with invalid characters in name', async () => {
    const {body, statusCode} = await createTodo({name: '**/(&%#**'});
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
  it('add todo with missing name', async () => {
    const {body, statusCode} = await createTodo({});
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
  it('add todo with invalid name type', async () => {
    const {body, statusCode} = await createTodo({name: 123});
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
});
</pre>

<pre class="file" data-filename="api.test.js" data-target="replace">
describe('Todo endpoints - create', () => {
  it('add todo with valid name', async () => {
    const user = {name: 'New Todo'};
    const {body, statusCode} = await createTodo(user);
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body.name).toBe(user.name);
  });
});
</pre>


Jest keywords: describe, expect, it
Supertest keywords: request

Jest mocking:

jest.mock('../src/models/Todos');
await Todos.add.mockResolvedValue(mockUser);
const {body, statusCode} = await req.createTodo({name: mockUser.name});
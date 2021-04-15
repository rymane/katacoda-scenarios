
#### Installation

Install Jest and Supertest with npm:  
`npm install jest supertest --save-dev`{{execute}}

Next, click on Copy to clipboard below to define a test script in the file `package.json`.

<pre class="file" data-filename="server/package.json" data-target="insert" data-marker='"insert-test":""'>"test": "jest"</pre>

We can now run `npm run test`{{execute}} to execute the tests. However, since we have not written any tests yet, the command will raise an error.

### Writing tests

Create a test directory `mkdir tests`{{execute}}  
Enter the directory `cd tests`{{execute}}  
Create two files `touch api.test.js`{{execute}}

#### Using the Supertest module

Click on `Copy to editor` below to add the file `request.js` with the following content to the newly created test directory:

<pre class="file" data-filename="server/tests/request.js" data-target="replace">
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

##### Supertest keywords:
- `request`: A function used to make HTTP requests while testing. It takes a server as argument, and returns an object which could be used to send HTTP requests to the server given as an argument.

#### Writing tests

Click on `Copy to editor` below to add the file `api.test.js` with the following content to the test directory:

<pre class="file" data-filename="server/tests/api.test.js" data-target="replace">
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

##### Jest keywords:
- `describe`:
- `expect`: 
- `it(name, fn, timeout)`: Runs a test. The first argument defines the tests name, the second is a function that contains the expectations to test, and the third (optional) is a timeout, specifying how long to wait before aborting (default: 5 milliseconds).



### Mocking the data model

jest.mock('../src/models/Todos');
await Todos.add.mockResolvedValue(mockUser);
const {body, statusCode} = await req.createTodo({name: mockUser.name});
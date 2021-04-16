#### Installation

Install Jest and Supertest with npm:  
`npm install jest supertest --save-dev`{{execute}}

Next, click on Copy to clipboard below to define a test script in the file `package.json`.

<pre class="file" data-filename="server/package.json" data-target="insert" data-marker='"insert-test": ""'>"test": "jest"</pre>

We can now run `npm run test`{{execute}} to execute the tests. However, since we have not written any tests yet, the command will raise an error.

### Writing tests

Create a test directory `mkdir tests`{{execute}}  

#### Using the Supertest module

Click on `Copy to Editor` below to add the file `request.js` with the following content to the test directory:

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

This file defines and exports three functions that could be used to send requests to the server's three different API endpoints while testing. The Supertest module and its request function can be imported and used directly in the test file. However, creating a separate file adds syntactic sugar to the Supertest API and makes it easier to use. 

##### Supertest keywords
- `request`: A function used to make HTTP requests while testing. It takes a server as argument, and returns an object which could be used to send HTTP requests to the server given as an argument.

#### Now let's create our first test!

Click on `Copy to Editor` below to add the file `api.test.js` with the following content to the test directory:

<pre class="file" data-filename="server/tests/api.test.js" data-target="replace">
const { createTodo, deleteTodo, getTodo } = require('./request');

describe('Todo endpoints - create', () => {
  it('add todo with valid name', async () => {
    const user = {name: 'New Todo'};
    const {body, statusCode} = await createTodo(user);
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name', user.name);
  });
//new-tests
});
</pre>

Run the test `npm run test`{{execute}}.

This test sends a POST request to the endpoint `/api/todos`, including a body with a valid name. Since the name is valid, we expect the `statusCode` to equal 201 and the return object having the properties `id` and `name`, where the `name` should have the same valid as sent in the request.

**Note:** Mocking of the data model will be introduced in the next step of the tutorial.

##### Jest keywords

`describe(name, fn)` - Groups together several related tests. The first argument defines the group's name, and the second is a function including tests.

`expect(value)` - Used to test a value. Expect should be used along with a function that asserts something about the value. For instance, one could use the `toEqual` function like so `expect(value).toEqual(value2)` to check equality between value and value2.

`it(name, fn, timeout?)` - Runs a test. The first argument defines the test's name. The second is a function that contains the expectations to test. The third (optional) is a timeout, specifying how long to wait before aborting (default: 5 milliseconds).

`toHaveProperty(keyPath, value?)` - Used to check if a property at the provided reference `keyPath` exists for an object.
The second (optional) argument can be used to compare the received property value.

`toEqual(value)` - Used to compare all properties of object instances (checks deep equality).

The Jest API covers much more functionality than is included in this tutorial. Explore the [Jest documentation](https://jestjs.io/docs/api) if you are curious.

#### Let's write som more tests!

Click on `Copy to Editor` below to add the following three tests to the file `api.test.js`. You can also manually copy the content and paste it where the comment `//new-tests` is located.

<pre class="file" data-filename="server/tests/api.test.js" data-target="insert" data-marker="//new-tests">
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
  });</pre>

Run the tests `npm run test`{{execute}}.

As in the first test case, the newly added tests send POST requests to the endpoint `/api/todos`. However, these requests include bodies with an invalid name of different kinds, invalid characters, missing name tag, and invalid name type. Since the body is invalid, we expect the `statusCode` to equal 400 and the return object having the property `error` as defined in the server.
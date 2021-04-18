Until now, we have written tests that interact directly with the data model. If we used a persistent database, we would have modified actual data while testing, which is not sufficient. One way to solve this is to create a separate database for testing. However, interacting with a cloud-based database while testing might take too much time, and the tests might fail due to connection errors. Here is where mocks come in. It simply lets us write stable tests that abstract the database layer dependency. It's now time to include mocks in our tests, to abstract.

#### Mocks in Jest
To mock the database model, we must first import the module we want to mock, then mock the module by calling `jest.mock()`, and finally add a mocking function before each API endpoint call. This tutorial will use the mocking function `mockReturnValue(value)` to mock API endpoint calls' return value.

**Note:** The Jest API covers much more functionality for mocks than is included in this tutorial. Explore the [Jest documentation - Mock Functions](https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue) if you are curious.

Let's replicate the first test that we wrote in the previous step. Click on `Copy to Editor` below to add the file `api-mock.test.js` with the following content to the test directory:

<pre class="file" data-filename="server/tests/api-mock.test.js" data-target="replace">
const Todos = require('../src/models/Todos');
const {createTodo, deleteTodo, getTodo} = require('./request');

jest.mock('../src/models/Todos');

describe('Todo endpoints - create', () => {
  it('add todo with valid name', async () => {
    const mockTodo = {id: 2, name: 'First Todo'};
    Todos.create.mockReturnValue(mockTodo);
    const {body, statusCode} = await createTodo({name: mockTodo.name});
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name', mockTodo.name);
  });
});
</pre>

Run the tests `npm run test`{{execute}}.

**Note:** There is no need to mock the data model in the other tests we created in the previous step since the policy middleware sends the HTTP responses in these cases, which means that `Todos.create` never gets called.

`jest.mock(moduleName)`- Mocks the module given as a parameter.

`mockFn.mockReturnValue(value)` - Takes an argument `value` which will be returned whenever the mock function `mockFn` is called. This function assumes that the mocked function is synchronous, which all calls to our data model are. However, these calls are asynchronous while using a persistent database. In that case, one must use the mocking function `mockResolvedValue(value)` instead, which is useful to mock asynchronous functions.

#### Let's add some more mocked tests

<pre class="file" data-filename="server/tests/api-mock.test.js" data-target="append">
describe('Todo endpoints - delete', () => {
  it('delete todo with valid id', async () => {
    const mockTodo = {id: 0, name: 'First todo'};
    Todos.delete.mockReturnValue(true);
    const {statusCode} = await deleteTodo(mockTodo.id);
    expect(statusCode).toEqual(204);
  });
  it('delete todo with non existing todo id', async () => {
    Todos.delete.mockReturnValue(false);
    const {statusCode} = await deleteTodo(-1);
    expect(statusCode).toEqual(404);
  });
});
</pre>

Run the tests `npm run test`{{execute}}.

**For the curious:** You can find even more written tests in the GitHub repo at the branch [express-app-complete](https://github.com/nwessman/katacoda-scenarios/tree/express-app-complete). This branch includes the complete project used in this tutorial, including linting, tests, and the GitHub Action.
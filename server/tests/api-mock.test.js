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

describe('Todo endpoints - get', () => {
  it('get todo with valid id', async () => {
    const mockTodo = {id: 0, name: 'First todo'};
    Todos.get.mockReturnValue(mockTodo);
    const {body, statusCode} = await getTodo(mockTodo.id);
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('id', mockTodo.id);
    expect(body).toHaveProperty('name', mockTodo.name);
  });
  it('get todo with non existing todo id', async () => {
    Todos.get.mockReturnValue(undefined);
    const {body, statusCode} = await getTodo(-1);
    expect(statusCode).toEqual(404);
    expect(body).toHaveProperty('error');
  });
});

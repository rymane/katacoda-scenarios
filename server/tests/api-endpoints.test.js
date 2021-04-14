const { describe, expect, it } = require('@jest/globals');
const Todos = require('../src/models/Todos');
const request = require('supertest');
const api = require('../src/api');

// eslint-disable-next-line no-undef
jest.mock('../src/models/Todos');

const mockData = [
  {
    id: 0,
    name: 'First todo',
  },
  {
    id: 1,
    name: 'Second todo',
  },
];

const req = {
  createTodo: (body) => request(api).post('/api/todos').send(body),
  deleteTodo: (id) => request(api).delete(`/api/todos/${id}`),
  getTodo: (id) => request(api).get(`/api/todos/${id}`),
  getAllTodos: () => request(api).get('/api/todos/'),
};

describe('Todo endpoints - create', () => {
  it('add todo with valid name', async () => {
    const mockUser = { id: 2, name: 'New Todo' };
    await Todos.add.mockResolvedValue(mockUser);
    const { body, statusCode } = await req.createTodo({ name: mockUser.name });
    expect(statusCode).toEqual(201);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body.name).toBe(mockUser.name);
  });
  it('add todo with invalid characters in name', async () => {
    const { body, statusCode } = await req.createTodo({ name: '**/(&%#**' });
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
  it('add todo with missing name', async () => {
    const { body, statusCode } = await req.createTodo({});
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
  it('add todo with invalid name type', async () => {
    const { body, statusCode } = await req.createTodo({ name: 123 });
    expect(statusCode).toEqual(400);
    expect(body).toHaveProperty('error');
  });
});

describe('Todo endpoints - delete', () => {
  it('delete todo with valid id', async () => {
    await Todos.delete.mockResolvedValue(true);
    const { statusCode } = await req.deleteTodo(mockData[0].id);
    expect(statusCode).toEqual(204);
  });
  it('delete todo with non existing todo id', async () => {
    await Todos.delete.mockResolvedValue(false);
    const { statusCode } = await req.deleteTodo(-1);
    expect(statusCode).toEqual(404);
  });
  it('delete todo with invalid id type', async () => {
    const { statusCode } = await req.deleteTodo('invalid type');
    expect(statusCode).toEqual(400);
  });
});

describe('Todo endpoints - index', () => {
  it('get todos', async () => {
    await Todos.getAll.mockResolvedValue(mockData);
    const { body, statusCode } = await req.getAllTodos();
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('todos');
    expect(body.todos).toHaveLength(2);
  });
});

describe('Todo endpoints - show', () => {
  it('get todo with valid id', async () => {
    await Todos.get.mockResolvedValue(mockData[0]);
    const { body, statusCode } = await req.getTodo(mockData[0].id);
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body.name).toBe(mockData[0].name);
  });
  it('get todo with non existing todo id', async () => {
    await Todos.get.mockResolvedValue(undefined);
    const { statusCode } = await req.getTodo(-1);
    expect(statusCode).toEqual(404);
  });
  it('get todo with invalid id type', async () => {
    const { statusCode } = await req.getTodo('invalid type');
    expect(statusCode).toEqual(400);
  });
});
const { createTodo, deleteTodo, getTodo } = require('./request');

describe('Todo endpoints - create', () => {
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

describe('Todo endpoints - delete', () => {
  it('delete todo with invalid id type', async () => {
    const {statusCode} = await deleteTodo('invalid type');
    expect(statusCode).toEqual(400);
  });
});

describe('Todo endpoints - get', () => {
  it('get todo with invalid id type', async () => {
    const {statusCode} = await getTodo('invalid type');
    expect(statusCode).toEqual(400);
  });
});

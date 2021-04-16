jest.mock('../src/models/Todos');
await Todos.add.mockResolvedValue(mockUser);
const {body, statusCode} = await req.createTodo({name: mockUser.name});
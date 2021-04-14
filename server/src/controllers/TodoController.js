const Todos = require('../models/Todos');

module.exports = {
  /**
   * Add todo.
   * 
   * @param {Request} req The request object.
   * @param {String} req.body.id The name of the todo.
   * @param {Response} res The response object.
   */
  async create(req, res) {
    const { name } = req.body;
    const user = await Todos.add(name);
    res.status(201).send(user);
  },
  /**
   * Delete a todo by id.
   * 
   * @param {Request} req The request object.
   * @param {int} req.params.id The id of the todo.
   * @param {Response} res The response object.
   */
   async delete(req, res) {
    const { id } = req.params;
    const success = await Todos.delete(id);
    if (success) res.status(204).send();
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
  /**
   * Get all todos.
   * 
   * @param {Request} req The request object.
   * @param {Response} res The response object.
   */
  async index(req, res) {
    const todos = await Todos.getAll();
    res.status(200).send({ todos });
  },
  /**
   * Get todo by id.
   * 
   * @param {Request} req The request object.
   * @param {int} req.params.id The id of the todo.
   * @param {Response} res The response object.
   */
  async show(req, res) {
    const { id } = req.params;
    const todo = await Todos.get(id);
    if (todo !== undefined) res.status(200).send(todo);
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
};

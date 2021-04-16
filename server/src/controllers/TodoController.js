const Todos = require('../models/Todos');

module.exports = {
  /**
   * Create a new todo.
   *
   * @param {Request} req The request object.
   * @param {String} req.body.id The name of the todo.
   * @param {Response} res The response object.
   */
  create(req, res) {
    const {name} = req.body;
    const user = Todos.create(name);
    res.status(201).send(user);
  },
  /**
   * Delete a todo by id.
   *
   * @param {Request} req The request object.
   * @param {int} req.params.id The id of the todo.
   * @param {Response} res The response object.
   */
  delete(req, res) {
    const {id} = req.params;
    const success = Todos.delete(id);
    if (success) res.status(204).send();
    else res.status(404).send({error: `Todo with id: ${id} does not exist!`});
  },
  /**
   * Get todo by id.
   *
   * @param {Request} req The request object.
   * @param {int} req.params.id The id of the todo.
   * @param {Response} res The response object.
   */
  get(req, res) {
    const {id} = req.params;
    const todo = Todos.get(id);
    if (todo !== undefined) res.status(200).send(todo);
    else res.status(404).send({error: `Todo with id: ${id} does not exist!`});
  },
};

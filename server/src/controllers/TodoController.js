const Todos = require('../models/Todos');

module.exports = {
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  async create(req, res) {
    const { name } = req.body;
    const user = await Todos.add(name);
    res.status(201).send(user);
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
   async delete(req, res) {
    const { id } = req.params;
    const success = await Todos.delete(id);
    if (success) res.status(204).send();
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  async index(req, res) {
    const todos = await Todos.getAll();
    res.status(200).send({ todos });
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  async show(req, res) {
    const { id } = req.params;
    const todo = await Todos.get(id);
    if (todo !== undefined) res.status(200).send(todo);
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
};

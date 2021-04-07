const Todos = require('../models/Todos');

module.exports = {
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  create(req, res) {
    const { name } = req.body;
    const user = Todos.add(name);
    res.status(200).send(user);
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  delete(req, res) {
    const { id } = req.params;
    const success = Todos.delete(id);
    if (success) res.status(200).send({ message: `Todo with id: ${id} was deleted successfully` });
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  index(req, res) {
    const todos = Todos.getAll();
    res.status(200).send({ todos });
  },
  /**
   * ::TODO::
   * 
   * @param {*} req ::TODO::
   * @param {*} res ::TODO::
   */
  show(req, res) {
    const { id } = req.params;
    const todo = Todos.get(id);
    if (todo !== undefined) res.status(200).send(todo);
    else res.status(404).send({ error: `Todo with id: ${id} does not exist!` });
  },
};

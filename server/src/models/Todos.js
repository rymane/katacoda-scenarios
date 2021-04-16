/**
 * The Todos model.
 *
 * This file defines the Todos model and exports an API which could be
 * used to interact with it.
 */

/**
 * Todo object.
 *
 * @typedef {Object} Todo
 * @property {number} id - A unique identifier.
 * @property {string} name - The name of the todo.
 */
 const todos = {};
 let nextID = 0;
 
 module.exports = {
   /**
   * Create a new todo.
   *
   * @param {string} name - The name of the new todo.
   * @return {number} The ID of the newly created todo.
   */
   create(name) {
     todos[nextID] = {
       id: nextID,
       name,
     };
     nextID += 1;
     return todos[nextID - 1];
   },
   /**
   * Delete a todo from the Todo model.
   *
   * @param {number} id - The ID of the todo to delete.
   * @return {boolean} Whether the deletion was successfull.
   */
   delete(id) {
     return todos[id] ? delete todos[id] : false;
   },
   /**
   * Get a Specific Todo by id.
   *
   * @param {number} id - The ID of the todo.
   * @return {Todo} The requested todo.
   */
   get(id) {
     return todos[id];
   },
 };
 
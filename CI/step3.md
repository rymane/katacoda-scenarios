The application used in this tutorial is a simple Express server, serving a `TODO-list` REST api with 3 API-endpoints.
The user of this application can simply get, add and delete todos with basic HTTP requests defined in `api.js`.

The project includes the following files:
- `api.js`: Creates the server and define its endpoints, including the actions to be called for each endpoint.
- `index.js`: The entry point for the application. Simply starts the server.
- `controllers/TodoController.js`: Request controller, exports functions that interact with the todo-list model.
- `models/Todos.js`: Defines the todo-list model with the actions `add`, `delete`, and `get`.
- `policies/TodoPolicy.js`: Validates input of the requests. This file exports two functions `validateID` and `validateName`, used in `api.js`.

![Express app file structure](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/express-app-structure.JPG?raw=true)

### Project set up

Enter the root of the application `cd katacoda-scenarios/server`{{execute}}

Install project dependencies `npm install`{{execute}}

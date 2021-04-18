The application used in this tutorial is a simple Express server, serving a `TODO-list` REST API with 3 API endpoints.
This application can get, add and delete todos with basic HTTP requests defined in `api.js`.

The project includes the following files:
- `api.js`: Creates the server and defines its endpoints, including the actions to be called for each endpoint.
- `index.js`: The entry point for the application. It starts the server.
- `controllers/TodoController.js`: The request controller exports functions that interact with the todo-list model.
- `models/Todos.js`: Defines the todo-list model with the actions `add`, `delete`, and `get`.
- `policies/TodoPolicy.js`: Validates input of the requests. This file exports two functions `validateID` and `validateName`, used in `api.js`.

#### Project set up

Enter the root of the application `cd katacoda-scenarios/server`{{execute}}

Install project dependencies `npm install`{{execute}}

### Express application overview

The application used in this tutorial is a simple Express server, serving a `TODO-list` REST api with 4 api-endpoints.
The user of this application can simply get, add and delete todos with basic http requests.
The project includes the following files:

- `api.js`: Creates the server and define its endpoints, including the actions to be called for each endpoint.
- `index.js`: The entry point for the application. Simply starts the server.
- `controllers/TodoController.js`: Responsible for handling the requests, exports functions that interact with the todo-list model.
- `models/Todos.js`: Defines the todo-list model with the actions `add`, `delete`, `get` and `getAll`.
- `policies/TodoPolicy.js`: Validates input of the requests. This file exports two functions `validateID` and `validateName`, used in `api.js`.

**NOTE:** If you want to follow allong the tutorial on your own computer instead of in the Katacoda sandbox you can find the code for the Express application [here.](https://github.com/nwessman/katacoda-scenarios/tree/express-app) If you decide to follow along locally you get the advantage of being able to access the api (via the browser etc.) and as well set up the github actions in the last step.


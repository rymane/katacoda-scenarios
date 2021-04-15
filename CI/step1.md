## Express application overview

The application used in this tutorial is a simple Express server, serving a `TODO-list` REST api with 4 api-endpoints.
The user of this application can simply get, add and delete todos with basic http requests.
The project includes the following files:

- `api.js`: Creates the server and define its endpoints, including the actions to be called for each endpoint.
- `index.js`: The entry point for the application. Simply starts the server.
- `controllers/TodoController.js`: Responsible for handling the requests, exports functions that interact with the todo-list model.
- `models/Todos.js`: Defines the todo-list model with the actions `add`, `delete`, `get` and `getAll`.
- `policies/TodoPolicy.js`: Validates input of the requests. This file exports two functions `validateID` and `validateName`, used in `api.js`.

![Express app file structure](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/express-app-structure.JPG?raw=true)

**NOTE:** If you want to follow allong the tutorial on your own computer instead of in the Katacoda sandbox you can find the code for the Express application [here.](https://github.com/nwessman/katacoda-scenarios/tree/express-app) If you decide to follow along locally you get the advantage of being able to access the api (via the browser etc.) and as well set up the github actions in the last step.

### Installation
If you don't already have Nodem, NPM and Express installed we first must install them. You can check if you have them installed by running the following three commands in the terminal:
```
node -v
npm -v
npm express -v
```
If they are already installed you can jump to step 4.

#### 1. Install Node
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```
#### 2. Test Node and npm
Node:
``` 
> node -v
v12.16.3
``` 
NPM:
```
> npm -v
6.14.4
```
#### 3. Install Express

```
npm install express
```

#### 4. Install the application's dependencies

From the root directory of the application run:
```
npm install
```

#### 5. Run the application (locally only)

If you are running the tutorial locally on your own machine you can now try to run the application by using this command:
```
npm start
```
or with debugging turned on:
```
SET DEBUG=server:* & npm start
```
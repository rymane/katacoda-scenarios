### Intro to api endpoints testing with Jest and Supertest

Testing API endpoints often includes testing multiple functions that span across different pieces of a web app. This kind of testing is called integration testing and will be used throughout this tutorial. We will write such tests using the JavaScript framework Jest and module Supertest.

#### Jest

Jest is a JavaScript testing framework that enables users to write automated tests for JavaScript projects. The framework has had great success because of its minimal demands on configuration and its extensive and well-documented API. Jest is compatible with several well-known JavaScript frameworks such as TypeScript, Node, React, Angular and Vue.

#### Supertest

Supertest is a JavaScript module that enables us to send HTTP requests to test API endpoints. It provides a high-level abstraction for testing HTTP whilst easy to use.

#### Mocking with Jest

Mocks provide the capability to abstract the behavior of a functional dependency while testing. This technique is especially useful when making HTTP calls to an API or interacting with the database layer. In this tutorial, mocking will be used to abstract the data model. Even though we only use a data model to store non persistent data, the same technique applies if a real database is apparent.

In order to not interact with and modify the data model while testing, we use mocking to abstract the data model. This means that http requests performed from the tests are not made to the real data model in `models/Todos.js`. Instead, we use mock data defined in the test file.
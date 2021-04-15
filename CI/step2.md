Testing API endpoints often includes testing multiple functions that span across various pieces of the application. This sort of testing is called integration testing and will be used throughout this tutorial. We will write such tests using the JavaScript framework Jest and the module Supertest.

#### Jest

Jest is a JavaScript testing framework that enables users to write automated tests for JavaScript projects. The framework has had great success because of its minimal demands on configuration and its extensive and well-documented API. Jest is compatible with several well-known JavaScript frameworks such as TypeScript, Node, React, Angular and Vue.

#### Supertest

Supertest is a JavaScript module that enables us to send HTTP requests to test API endpoints. It provides a high-level abstraction for testing HTTP while easy to use.

#### Mocking with Jest

Mocks provide the capability to abstract the behavior of a functional dependency while testing. This technique is beneficial when making HTTP calls to an API or interacting with the database layer/data model. 

This tutorial will utilize mocking to abstract the data model. Doing so empowers us to perform API endpoints testing without interaction with the actual data model. This means that HTTP requests from the written tests do not interact with the existing data model in `models/Todos.js`. Instead, we use mock data defined in the test file. Even though we only use a simple data model to store non-persistent data in this application, we could use the same technique when an actual database is apparent.
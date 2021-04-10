### Intro to automated testing `Jest` and `Supertest`

`Jest` is a JavaScript testing framework that enables users to write automated tests for JavaScript projects. `Jest` is compatible with several well-known JavaScript framworks such as TypeScript, Node, React, Angular and Vue.
`Jest` allows developers to write tests with an approachable, familiar and feature-rich API giving quick results.

TO BE UPDATED - "Jest - Jest is a JavaScript testing framework developed by Facebook. It works out of the box with minimal configuration and has in-built test runner, assertion library and mocking support.

TO BE UPDATED - Supertest - A library for testing Node.js HTTP servers. It enables us to programmatically send HTTP requests such as GET, POST, PATCH, PUT, DELETE to HTTP servers and get results."

#### Why `Jest`:
- Well documented API
- Requires minimal configuration
- Runs test in parallell in their own processes to increase performance.

#### Mocking with `Jest`

TO BE UPDATED - "In unit testing, mocks provide us with the capability to stub the functionality provided by a dependency and a means to observe how our code interacts with the dependency. Mocks are especially useful when it's expensive or impractical to include a dependency directly into our tests, for example, in cases where your code is making HTTP calls to an API or interacting with the database layer.

Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output.

Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope. You can use mocked imports with the rich Mock Functions API to spy on function calls with readable test syntax."

Get request to mock data
In order to improve testing speed and efficiency the http request does not have to be made to a real database or local external file(usStates.json). We can create a mock data (“stunt double”) by using the jest module and mock method; jest.mock("./usStates.json", callback function) . Instead of using the real data (usStates.json), we use mock data passed in within the callback function.

### Why `Supertest`

### Integration testing

Testing multiple functions/units or testing that spans across different pieces of a web app is considered integration testing. Testing express web apis/endpoints or routes is an example of integration testing.
This blog illustrates how to do integration test on the simple express app, specifically the web apis/endpoints or routes. Before testing the api routes, we isolated all the CRUD operations into a server-routes.js file (like a stand-alone module). The testing file is server-routes.test.js.
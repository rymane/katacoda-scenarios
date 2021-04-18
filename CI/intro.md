<!-- Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. It’s a primary DevOps best practice, allowing developers to frequently merge code changes into a central repository where builds and tests then run. Automated tools are used to assert the new code’s correctness before integration. -->

This tutorial will go through the steps of setting up a pre-built Express application that we then use to set up automatic testing with `Jest` and `Supertest` and linting with `ESLint`, explaining the fundamentals of testing and linting in the process. Finally, we apply our newly acquired knowledge when we set up `continuous integration (CI)` with testing/linting using `GitHub Actions`.

#### This tutorial has the following structure:
1. Introduction
2. Before you begin
3. Express application overview and set up
4. Automated integration testing for API endpoints with Jest and Supertest
5. Mocking the data model
6. Static code analysis with ESLint
7. Continous Integration with GitHub Actions
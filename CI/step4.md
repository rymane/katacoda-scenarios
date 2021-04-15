### Intro to static code analysis with Eslint

Eslint is a static code analysis tool used to find bugs, programming errors, and code formatting errors. It is built into most text editors and suitable to run as part of the CI pipeline. The tool also offers automatically syntax-aware error fixes for many problems. This allows you to automatically fix bugs and errors without worrying about experiencing newly created errors. Eslint is also highly customizable and lets you define custom parsers and your own rules that work alongside ESLint's built-in rules.

#### Installation

Install Eslint with npm:
    $ npm install eslint --save-dev

**Note:** Installation could also be performed with `yarn`, more information about how to install with `yarn` could be found [here](https://eslint.org/docs/user-guide/getting-started).

    $ npx eslint --init
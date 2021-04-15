ESLint is a static code analysis tool used to find bugs, programming, and code formatting errors. It is built into most text editors and is suitable to run as part of the CI pipeline. The tool also offers automatic syntax-aware error fixes for many problems that automatically resolve bugs and errors.

#### Installation

Install ESLint with npm: `npm install eslint --save-dev`{{execute}}

**Note:** Installation could also be performed with `yarn`, [more information](https://eslint.org/docs/user-guide/getting-started).

Next, create the configuration file `.eslintrc.json` by running: `npx eslint --init`{{execute}}

Configure the project as follows:

    ✔ How would you like to use ESLint?
       -> To check syntax, find problems, and enforce code style

    ✔ What type of modules does your project use?
       -> CommonJS (require/exports)

    ✔ Which framework does your project use?
       -> None of these

    ✔ Does your project use TypeScript?
       -> No

    ✔ Where does your code run?
       -> Node

    ✔ How would you like to define a style for your project?
       -> Use a popular style guide

    ✔ Which style guide do you want to follow?
       -> Google: https://github.com/google/eslint-config-google
  
    ✔ What format do you want your config file to be in?
       -> JSON


Choose Yes when prompted to install the dependency `eslint-config-google@latest`.

    ✔ Would you like to install them now with npm?
       -> Yes

#### Running

To lint all JavaScript files in the `src` directory, run: `eslint '**/*.js'`{{execute}}

The linter will catch a few formatting errors. Let's fix them automatically by running: 
`eslint '**/*.js' --fix`{{execute}}

Run `eslint '**/*.js'`{{execute}} once again to check that the errors have been resolved. The output is empty if no lint errors exists.

To ease lint execution, we define two new scripts in the file `package.json`.

    "scripts": {
      ...
      "lint": "eslint '**/*.js'",
      "lint:fix": "eslint '**/*.js' --fix",
      ...
    },

We can now run `npm run lint`{{execute}} to lint and `npm run lint:fix`{{execute}} to lint and automatically fix errors.

#### Custom rules (optional)

ESLint is highly customizable and let's you define custom rules that work alongside the built-in rules. Try to create a custom rule by updating the `rules` tag in the config file `.eslintrc.json` with the following content:

    "rules": {
        "quotes": ["error", "double"]
    }

The rule enforces the source code always to use double-quotes and not single-quotes. The change introduces a few new errors since the source code includes a few single quotes.

As an alternative to `error` which raises an error when not fulfilled, one could use:
- `off`: to turn the rule off
- `warn`: to turn the rule as a warning. In contrast to `error`, `warn` does not change the exit code. 

**Note:** Before you continue, remove the newly added rule.
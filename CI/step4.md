### Intro to static code analysis with Eslint

Eslint is a static code analysis tool used to find bugs, programming errors, and code formatting errors. It is built into most text editors and suitable to run as part of the CI pipeline. The tool also offers automatically syntax-aware error fixes for many problems. This allows you to automatically fix bugs and errors without worrying about experiencing newly created errors.

#### Installation

Install Eslint with npm:

    $ npm install eslint --save-dev

**Note:** Installation could also be performed with `yarn`, more information about how to install with `yarn` could be found [here](https://eslint.org/docs/user-guide/getting-started).

You should then set up a configuration file, this could be done with the following command:

    $ npx eslint --init

Set up your project with the following settings. This creates a `.eslintrc.json` file in your `src` directory.

    ✔ How would you like to use ESLint?
       · style
    ✔ What type of modules does your project use?
       · commonjs
    ✔ Which framework does your project use?
       · none
    ✔ Does your project use TypeScript?
       · No
    ✔ Where does your code run?
       · node
    ✔ How would you like to define a style for your project?
       · guide
    ✔ Which style guide do you want to follow?
       · google
    ✔ What format do you want your config file to be in?
       · JSON

    Checking peerDependencies of eslint-config-google@latest
    The config that you've selected requires the following dependencies: eslint-config-google@latest eslint@>=5.16.0

    ✔ Would you like to install them now with npm?
       · Yes

#### Running

To lint all js files in the `src` directory, run:

    $ eslint '**/*.js'

This should raise 4 formatting errors. The errors could either be resolved manually or automatically by running:

    $ eslint '**/*.js' --fix

Fix the errors and run `eslint '**/*.js'` once again. The output is empty is all errors have been resolved.

To ease execution of these commands, we define two new scripts in the file `package.json`.

    "scripts": {
      ...
      "lint": "eslint '**/*.js'",
      "lint:fix": "eslint '**/*.js' --fix",
      ...
    },

We can now run `npm run lint` and `npm run lint:fix`.

#### Custom rules (optional)

Eslint is also highly customizable and let's you define custom parsers and your own rules that work alongside ESLint's built-in rules.This is done by editing the config file `.eslintrc.json`. Try this by updating `rules` in the config file to the following:

    "rules": {
        "quotes": ["error", "double"]
    }

This will raise a few new errors, since all quotes are written as single quotes in the source code. Remove the added rule before continuing to the next step.
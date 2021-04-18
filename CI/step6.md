<!-- META TEXT LINT... -->
The next step is to incorporate static code analysis in our project to mitigate syntax errors or problems with formating. 


#### Installation

Install ESLint with npm: `npm install eslint --save-dev`{{execute}}. Make sure that you are in the `server` folder before running this command.

**Note:** Installation could also be performed with `yarn`, [more information](https://eslint.org/docs/user-guide/getting-started).

Next, create the configuration file `.eslintrc.json` in the current directory by running: `npx eslint --init`{{execute}}

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

To ease linting, we define two new scripts in the file `package.json`. Click on `Copy to Editor` below to add the scripts. If you want to do this manually, replace `insert-lint":""` with the content below in the same file.

<pre class="file" data-filename="server/package.json" data-target="insert" data-marker='"insert-lint": ""'>
"lint": "eslint 'src/**/*.js'",
    "lint:fix": "eslint 'src/**/*.js' --fix"</pre>

Run: `npm run lint`{{execute}} to lint all files in the `src` directory.

The linter will catch a few formatting errors. Let's fix them automatically by running: 
`npm run lint:fix`{{execute}}

Run `npm run lint`{{execute}} once again to check that the errors have been resolved.

#### Custom rules (optional)

ESLint is highly customizable and let's you define custom rules that work alongside the built-in rules. Create a custom rule by updating the `rules` tag in the config file `.eslintrc.json` with the following content. This could be done manually or by clicking on `Copy to Editor` below.
<pre class="file" data-filename="server/.eslintrc.json" data-target="insert" data-marker='"rules": {
    }'>
"rules": { "quotes": ["error", "double"] }</pre>

**Note:** The file `.eslintrc.json` is hidden by default.

The rule enforces the source code always to use double-quotes and not single-quotes. The change introduces a few new errors since the source code includes a few single quotes.

Run `npm run lint`{{execute}}, the see the introduced error.

Fix the errors `npm run lint:fix`{{execute}}

Click on `Copy to Editor` below to remove the newly added rule.

<pre class="file" data-filename="server/.eslintrc.json" data-target="insert" data-marker='"rules": { "quotes": ["error", "double"] }'>
"rules": { }</pre>

Reset to single quotes `npm run lint:fix`{{execute}}

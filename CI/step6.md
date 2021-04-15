With Github Actions, we can easily set up a CI/CD environment to automate our Software workflow by building, testing, and deploying our code right in Github. 

Start by creating a folder in `/katacoda-scenarios/` called `.github` by using the command `mkdir .github`{{execute}}.
Change directory in to the `.github` folder: `cd .github`{{execute}}
In the `.github` folder, create a new folder called `workflows`: `mkdir workflows`{{execute}}.
Change directory into the `workflows` folder: `cd workflows`{{execute}}
Finally, create the new file called `CI.yml`: `touch CI.yml`{{execute}}.

In this file, we will specify the rules for our automatic testing and linting. We start by defining the name of our action, calling it `CI`.

```yml
name: CI
```

Then we must choose which type of GitHub event we want to run our action. We activate the GitHub Action on all push and pull requests, but this could be configured to fit your project needs. For instance, complete integration tests on every push request can take too much time to be feasible for large projects.

```yml
on: [push, pull_request]
```

Now we need to specify which directory in our GitHub repository that our CI job will run on. We define it with:

```yml
env: 
      working-directory: ./server
```

Next is to define the jobs we want to run at each event. We start by creating our linting job.

```yml
jobs: 
  #linting job
  linting:
      name: Linting
      runs-on: ubuntu-latest
      steps: 
      - name: Chekout repository
        uses: actions/checkout@v2
      - name: Use Node.js v.14
        uses: actions/setup-node@v1
        with:
          node-version: '14'
      - name: Install Node.js dependencies
        run: npm ci
        working-directory: ${{ env.working-directory }}
      - name: Run lint
        run: npm run lint
        working-directory: ${{ env.working-directory }}
```

We define the job `linting` with a name, what OS it will run on, and which steps to perform in this job. On GitHub, you will be able to see each step's status in the linting job, so it is important to name each step according to its functionality.

```yml
steps: 
      - name: Chekout repository
        uses: actions/checkout@v2
```
The first step in our job is to checkout the latest version of the repository in the testing environment.

```yml
 - name: Use Node.js v.14
        uses: actions/setup-node@v1
        with:
          node-version: '14'
```

We then need to set up Node and define what version to use.

```yml
      - name: Install Node.js dependencies
        run: npm ci
        working-directory: ${{ env.working-directory }}
```

The following command, `npm ci`, installs project dependencies in the virtual machine.

```yml
 - name: Run lint
        run: npm run lint
        working-directory: ${{ env.working-directory }}
```
Finally we run the linting, which produces the following output on GitHub.

![Linting Output](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Linting-output.jpg?raw=true)


Now we define our test job:

``` yml
  # Tests job
  tests:
    name: Tests
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Use Node.js v.14
      uses: actions/setup-node@v1
      with:
        node-version: '14'
    - name: Install Node.js dependencies
      run: npm ci
      working-directory: ${{ env.working-directory }}
    - name: Run Tests
      run: npm test
      working-directory: ${{ env.working-directory }}
```

All job runs in isolation in separate virtual machines. Therefore it is necessary to re-setup our tests' environment in the testing job. We could have used the same job for both testing and linting, but we want to separate them to clarify what fails and not when running the jobs.

```yml
    - name: Run Tests
      run: npm test
      working-directory: ${{ env.working-directory }}
```
The only difference is in the last step where we run the tests instead of the linting.
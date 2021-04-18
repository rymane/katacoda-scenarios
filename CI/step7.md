<!-- !!""
Intro till .github 
och workflows, varför de behövs och heter som de heter..
"" -->

Enter the root directory `/katacoda-scenarios/` by `cd ..`{{execute}}  
Create and enter the `.github` directory `mkdir .github; cd .github`{{execute}}  
Create and enter the `workflows` directory `mkdir workflows; cd workflows`{{execute}}  
Create a GitHub Action file: `touch CI.yml`{{execute}}.  

In this file, we will specify the rules for our automatic testing and linting. We start by defining the name of our action, calling it `CI`.

**Note:** The directory `.github` is hidden by default.

<pre class="file" data-filename=".github/workflows/CI.yml" data-target="replace"><code class="yml">name: CI</code></pre>

Then we must choose which type of GitHub event we want to run our action. We activate the GitHub Action on all push and pull requests, but this could be configured to fit your project needs. For instance, complete integration tests on every push request can take too much time to be feasible for large projects.

<pre class="file" data-filename=".github/workflows/CI.yml" data-target="append"><code class="yml">
on: [push, pull_request]</code></pre>

Now we need to specify which directory in our GitHub repository that our CI job will run on. We define it with:

<pre class="file" data-filename=".github/workflows/CI.yml" data-target="append"><code class="yml">
env: 
  working-directory: ./server</code></pre>

#### Create Linting job
Next is to define the jobs we want to run at each event. We start by creating our linting job.

<pre class="file" data-filename=".github/workflows/CI.yml" data-target="append"><code class="yml">
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
</code></pre>

We define the job `linting` with a name, what OS it will run on, and which steps to perform in this job. On GitHub, you will be able to see each step's status in the linting job, so it is important to name each step according to its functionality.

The first step in our job is to checkout the latest version of the repository in the testing environment.

```yml
    steps: 
    - name: Chekout repository
      uses: actions/checkout@v2
```

The second step, defines an set up the Node version to use.

```yml
    - name: Use Node.js v.14
      uses: actions/setup-node@v1
      with:
        node-version: '14'
```

The third step installs project dependencies in the virtual machine.

```yml
    - name: Install Node.js dependencies
      run: npm ci
      working-directory: ${{ env.working-directory }}
```

The last step, runs the code analysis.

```yml
    - name: Run lint
      run: npm run lint
      working-directory: ${{ env.working-directory }}
```

This action produce the following output on GitHub:

![Linting Output](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Linting-output.jpg?raw=true)


#### Create Testing job
It's now time to define our testing job.

<pre class="file" data-filename=".github/workflows/CI.yml" data-target="append"><code class="yml">
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
</code></pre>

The only difference is in the last step where we run the tests instead of the linting.

```yml
    - name: Run Tests
      run: npm test
      working-directory: ${{ env.working-directory }}
```

**Note:** All GitHub job runs in isolation in separate virtual machines. It is, therefore, necessary to re-setup our tests' environment for the testing job. One could use the same job for both testing and linting, but this implies that the second job won't run if the first job fails. Hence, separating them allows us to run both jobs either way. Also, each isolated job creates its own GitHub status checks flag. Separating the jobs so on creates a more convenient output.

The final step is to push the file to your Github repository and it will automaticly start working. You can try pushing dummy changes to your project to see the status of the automatic tests, this will be shown in the next step.

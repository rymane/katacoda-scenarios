## Intro Github Actions

With Github Actions we can easily set up an CI/CD envirnonment where we automate our Software workflow by building, testing and deploying our code right in Github. 

Start by creating a folder in `/katacoda-scenarios/` called `.github` by using the command `touch .github`.
In the `.github`folder create a new folder called `workflows` and there create a new file called `CI.yml`.

In this file we will specify the rules for our automatic testing and linting. We start by defining the name of our action calling it "CI" 

```name: CI```

Then we must choose on which type of Github event we want to run our action. We choose to use on all push and pull request. Here you need to choose what fits your project best. In large projects having full integration tests on every push request can take too much time to be feasible.

```on: [push, pull_request]```

Now we need to specify which directory in our github repository that our CI job is going to run on. We define it with:

```
env: 
      working-directory: ./server
```

Next is to define the jobs we want to run on each event. We start by creating our linting job.

```javascript
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

We define the job `linting` with a name, what OS it will run on and which steps is going to be performed in this job. On Github you will be able to see the status of each step in the linting job, so it is important to name each step according to its functionality. 

```
steps: 
      - name: Chekout repository
        uses: actions/checkout@v2
```
The first step in our job is to checkout the repository so our application will be downloaded to the testing environment. 

```
 - name: Use Node.js v.14
        uses: actions/setup-node@v1
        with:
          node-version: '14'
```
We then need to set up Node and which version we want to use.

```
      - name: Install Node.js dependencies
        run: npm ci
        working-directory: ${{ env.working-directory }}
```

This runs the command `npm ci` in our working director.

```
 - name: Run lint
        run: npm run lint
        working-directory: ${{ env.working-directory }}
```
Finally we run the linting.

This will produce the following output when run on Github.

![Linting Output](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Linting-output.JPG?raw=true)

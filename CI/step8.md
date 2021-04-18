**Note:** The part can only be done on your local machine. If you have done the previous steps on Katacoda, it's now time to fork and clone [this repo](https://github.com/nwessman/katacoda-scenarios/tree/express-app-complete).

Make sure to fork the repo before cloning since *Step: 8* requires you to have permission to push to the repository. The source code of the full project, including the code implemented in steps 1-7, resides in the branch `express-app-complete`.

The final step is to push the file to your Github repository and it will automatically start working. You can try pushing dummy changes to your project to see the status of the automatic tests. For instance, by changing a comment in the file `index.js`.

To see the status of your Github actions go to the action tab on your Github project.
![Github action tab](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Action-bar.jpg?raw=true)

Here you can see a list of all your push and pull request and the status of the automatic testing that has been done on these.

![Github action tab](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Actions-workflow.jpg?raw=true)

A green marker means that the tests has passed, a yellow that the tests are still conducted, and a red means that the tests has failed. Click on an instance to get more information on the tests, where it failed and so forth.

The status marker can also be seen in your commit history
![Commit status](https://github.com/nwessman/katacoda-scenarios/blob/main/CI/assets/Commit-checkbox.jpg?raw=true)

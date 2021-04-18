If you want to follow allong the tutorial on your own computer instead of in the Katacoda sandbox you can find the code for the Express application [here](https://github.com/nwessman/katacoda-scenarios/tree/express-app). If you do this, make sure to fork the repo before cloning since step 7 requires you to have permission to push to the repository. The source code of the project resides in the branch `express-app`.

**Note:** You will not be able to do Step 7: Github actions if you do not run this locally. However, you can proceed with the tutorial until step 7 and fork the complete project at that point, including everything implemented in step 1-6.

### Node installation (Locally only)

**Note:** This step is only required if you want to run the project locally, proceed to the next step if you continue on Katacoda.

If you don't already have Node and NPM installed we first must install them. You can check if you have them installed by running the following three commands in the terminal (Linux):
```
node -v
npm -v
```{{execute}}
If they are already installed you can jump to step 3.

#### 1. Install Node
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```{{execute}}
#### 2. Test Node and npm
Node:
``` 
> node -v
```{{execute}} 
NPM:
```
> npm -v
```{{execute}}

**Note:** Some of these commands used above are Linux specific, consult the [official documentation](https://nodejs.org/en/download/) for other OS support.

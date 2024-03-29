# Dev pre-requesites

## Git

Download [git](https://git-scm.com/downloads)
You can also download github desktop.

## SSH Keys between your PC and Github

Only needed if you're not runnning github desktop, follow [this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) if needed.

<!-- ## VS Code Extensions -->

<!-- I recommend you have  -->

## NodeJS

Download Node from [here](https://nodejs.org/en/download/current).

# Development

## Deploy locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes.\
You may also see any lint errors in the console.

## Deploy on cloud

First, build the new code

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

### `npm run deploy`

Run this in a `git bash` or simply a `bash` terminal, rather than a powershell one! This is because we need to use the `cp` command to build the 404->home redirect.
This will automatically push it to GH Pages. You might need to re-setup the DNS links in the GH Pages settings.

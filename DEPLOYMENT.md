# Deployment to GitHub Pages

This project is configured to be deployed on GitHub Pages as a static site. Follow the steps below to build and deploy your application.

## Prerequisites

1. Initialize a Git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a repository on GitHub and add it as a remote:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

## Method 1: Using `gh-pages` (Simpler)

1. **Install `gh-pages` package:**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`:**
   Add a `homepage` field at the top level of your `package.json` (replace with your actual GitHub username and repo name):
   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   ```
   Add the following scripts to the `scripts` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy:**
   Run the deployment command:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to a new `gh-pages` branch.

4. **Configure GitHub Repo:**
   Go to your GitHub repository -> **Settings** -> **Pages**.
   Under **Build and deployment**, select **Deploy from a branch**.
   Under **Branch**, select `gh-pages` and `/ (root)`. Save.

## Method 2: Using GitHub Actions

1. **Create the workflow file:**
   Create a new file `.github/workflows/deploy.yml` in your project root with the following content:

   ```yaml
   name: Deploy static content to Pages

   on:
     push:
       branches: ['main']

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Commit and Push:**
   Commit the workflow file and push to your `main` branch.

3. **Configure GitHub Repo:**
   Go to your GitHub repository -> **Settings** -> **Pages**.
   Under **Build and deployment**, select **GitHub Actions** as the source.
   Your site will now build and deploy automatically every time you push to the `main` branch.

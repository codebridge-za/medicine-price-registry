# 📋 Medicine Price Registry


Retail medicine prices are regulated in South Africa through the Single Exit Price Mechanism. These prices are published on a regular basis at [www.mpr.gov.za](http://www.mpr.gov.za). The information is only available in a large and unwieldy excel spreadsheet making it inaccessible to casual users.

This projects builds an API and basic user interface to query this database. You can find a running instance at [mpr.netlify.com](https://mpr.netlify.com/).

A typical use-case would be for a consumer to look for alternative products for a particular medicine, often generic medicines can be much cheaper than the branded product. Another use-case allows consumers to ensure that they are not being overcharged for their medicines. This database publishes the maximum price at which a medicine can be sold. A pharmacy cannot legally increase the price of a particular medicine above the price listed here.

## API
In addition to providing this simple web interface, we make available a rudimentary API that you can use to access the most up-to-date prices to be used in third party applications.

### Current Version APIs (in use)

A more comprehensive search that makes available additional fields https://mpr.code4sa.org/api/v2/search?q=lamictin

Accessing product details https://mpr.code4sa.org/api/v2/detail?nappi=703312001

Finding generic products (based in active ingredients) https://mpr.code4sa.org/api/v2/related?nappi=703312001

Basic search e.g. https://mpr.code4sa.org/api/v2/search-lite?q=lamictin

### Extra available APIs
Downloading a dump of the entire database https://mpr.code4sa.org/api/v2/dump

Get the last updated date https://mpr.code4sa.org/api/v2/last-updated

## Contributor instructions:

### 🌱 1. Set up local environment
1. Clone the repository by running `git clone git@github.com:codebridge-za/medicine-price-registry.git`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository to install all dependancies.

### ❤️ 2. Contribute
1. Please review the [branches](https://github.com/agis/git-style-guide) and [commits](https://github.com/agis/git-style-guide) sections in the following [documentation](https://github.com/agis/git-style-guide).
2. Create a new branch before adding a new feature (skip this step if you are contributing on a specific branch)
3. This project is using Gatsby.js. You can run `npm start` in the root folder
4. This will open a local version of the project at [localhost:8000](http://localhost:8000/)

### 🚀 3. Make a pull request
1. If you are making a public pull request (i.e. you do not have write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
2. If you are a project contributor (.e. you have write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `develop` branch.
4. The designated owner of the repository will automatically be tagged in all pull requests via the `docs/CODEOWNERS` file.
5. Once your code has been accepted and merged into `master` [Netlify](#netlify) will automatically deploy the changes to [mpr.netlify.com/](https://mpr.netlify.com/).


## Note
- This project is currently making use of **CSS Modules** for styling purposes temporarily.
- When adding to the project, please follow the folder and file structure already in place.
- This project is following the *eslint-config-airbnb* styleguide.

## TODO
- [] Change style convention to make use of **Styled Components** as well as **Material UI** components.
- [] Add CSS spinner before each ajax call.
- [] Redesign and submit new feature ideas.
- [] Create a script that downloads the latest database instead of shipping a sqlite db with the repo.
- [] It might be useful to compare prices over time.
- [] Seems like there are some spelling errors in the database - e.g. paracetamol and paracetemol. Might need to clean the database through some sort of fuzzy match and possibly report those errors back to mpr

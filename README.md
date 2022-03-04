# Cypress feature with Cucumber

## Pre-requirements

- Windows 7 and above (64-bit only)
- Node.js 12 or 14 and above

## Installation

- npm install cypress --save-dev
- npm install cypress-cucumber-preprocessor --save-dev
- npm install cypress-xpath

## Configuration

### Cucumber config

Add it to your plugins:
`$ cypress/plugins/index.js`

```javascript
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
```

Add support for feature files to your Cypress configuration `$ cypress.json`

```javascript
{
 "testFiles": "**/*.feature"
};
```

Add in the `$ package.json` the next line

```javascript
 "cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

### Xpath config

Add it to the project: `$ cypress/support/index.js`

```javascript
{
  require("cypress-xpath");
}
```

## How to write test

### For steps that are reusable for other tests

- In `$ cypress/integration` create the folder common `$ cypress/integration/common`
- In `$ /common` folder create a js. file where you can add Given, When, Then steps

### For regular steps

- In `$ cypress/integration` create .feature files
- Create a folders with the names of each .feature file
- Inside each folder create a js. with the name of the folder, where you can add Given, When, Then steps

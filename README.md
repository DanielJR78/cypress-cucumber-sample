# cypress-cucumber-sample
Example of using Cypress with Cucumber.


# Install and run
Once you get project sources, go on project folder to install dependencies

  `npm install`

and then launch tests from Cypress UI browser

  `npm run open`

or execute them all in headless mode  

  `npm run test:sample`

and finally generate HTML report

  `npm run report:cucumber`
  


# Test contents

Test files and implementation are stored under [Integration folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration)

Shared steps and page object classes are stored at:
```
cypress\integration\common
                          \page-objects\*PageObject.js
                          \StepDefinitions.js

```
Sample features are stored at:

```
cypress\integration\feature-sample
                                  \*.feature                         

```

Sample execution import from an XRay project is stored at:

```
cypress\integration\feature-xray
                                  \*.feature                         

```


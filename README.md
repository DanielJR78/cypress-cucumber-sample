# cypress-cucumber-sample
Example of using Cypress with Cucumber.

# Init
Run the following commands to get sources and install dependencies:  
  ```
  C:\...\myTargetDir> git clone https://github.com/DanielJR78/cypress-cucumber-sample.git
  
  C:\...\myTargetDir\cypress-cucumber-sample> npm i  
  ```  

# Run
### Browser mode:
Use this mode to manually execute tests from Cypress UI with web browser (development/debug usage).
  ```
  ./node_modules/.bin/cypress open
  ```
### Headless mode:
Use this mode to execute them in background or batch mode (background/CI usage).

Generated outputs after each execution will be stored in "cypress\screenshots" and "cypress\videos" folders.
  ```
  ./node_modules/.bin/cypress run
  ```


# Content
### Sample features:
There are a some implemented sample features in [amazon features folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/amazon).
 
Each .feature file has a folder with the same name containing specific steps and classes. Example:

```
LoginRequired.feature
\LoginRequired
    LoginRequiredSteps.js
    LoginRequiredClasses.js
    AnySpecificCode.js
```

Shared steps and classes can optionnally be stored at [common folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/common).
### Sample scripts:
There are a few tagged tests in these files:



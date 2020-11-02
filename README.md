# cypress-cucumber-sample
Example of using Cypress with Cucumber.

# Init
Get project sources and install dependencies on project folder:
  ```
  git clone https://github.com/DanielJR78/cypress-cucumber-sample.git
  npm i  
  ```  

# Run
### Browser mode:
Manually execute tests from Cypress UI within the web browser (development/debug usage).
  ```
  ./node_modules/.bin/cypress open
  ```
### Headless mode:
Execute tests in background/batch mode (background/CI usage). After each execution, generated outputs will be stored in "cypress\screenshots" and "cypress\videos" folders.
  ```
  ./node_modules/.bin/cypress run
  ```

# Content
Any test to be executed should be stored under [integration folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration).

### Features:
Any *.feature file* should have an associated folder with the *same name* which contains specific steps and classes in *.js files*. 
In our example, features are so implemented in [amazon subfolder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/amazon):
```
cypress\integration\amazon\LoginRequired.feature
cypress\integration\amazon\LoginRequired
                            |_ LoginRequiredSteps.js
                            |_ LoginRequiredClasses.js
                            |_ AnySpecificCode.js
```
### Common files:
Optionnally, shared steps and classes can be stored in [common folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/common).
```
cypress\integration\common
                    |_ CommonSteps.js
                    |_ CommonClasses.js    
```

# Development
### Sample files:
Standard samples provided by Cypress are available in [samples folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/samples). These scripts contain Cypress commands examples which can be usefull for developers.

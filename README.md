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
Any test to be executed should be stored under [integration](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration) folder. 

### [Integration folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration)
Any *.feature file* should have an associated folder with the *same name* which contains specific steps and classes in *.js files*. 
Our sample features are implemented in a custom subfolder [integration/amazon](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/amazon):
```
cypress\integration\amazon\LoginRequired.feature
cypress\integration\amazon\LoginRequired
                            |_ MySpecificSteps.js                            
                            |_ MySpecificClasses.js
```
Shared steps and classes can optionnally be stored in [common](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/common) folder.
```
cypress\integration\common
                    |_ MyCommonSteps.js
                    |_ MyCommonClasses.js    
```
### [Support folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/support)
Shared pre/postconditions can be defined inside *support/index.js* file (i.e. *before/beforeEach/after/afterEach* clauses) 
Custom commands can be implemented inside *support/commands.js* file, so that they can be reused while defining stpets for example.
```
cypress\support
        |_ index.js
        |_ commands.js    
```

### [Fixtures folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/support)
Custom data structures can be defined in this folder and easily reused away. Fixtures are helpfull to mock data which not depends on specific scenarios (i.e. login data for the users needed)

### [Samples folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/samples)
Standard code samples provided by Cypress are available at this folder. These scripts contain Cypress commands examples which can be usefull for developers.

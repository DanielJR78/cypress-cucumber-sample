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
Any test to be executed should be stored under [integration folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration).  
Any *.feature file* should have an associated folder with the *same name* and containing specific steps and classes in *.js files*. 

In our example, features are so implemented in [amazon subfolder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/amazon):
```
cypress\integration\LoginRequired.feature
cypress\integration\LoginRequired
    |_LoginRequiredSteps.js
    |_LoginRequiredClasses.js
    |_AnySpecificCode.js
```
### More info:
Optionnally, shared steps and classes can be stored in [common folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/integration/common).
```
cypress\integration\common
    |_CommonSteps.js
    |_CommonClasses.js    
```
Standard samples provided by Cypress are available in [samples folder](https://github.com/DanielJR78/cypress-cucumber-sample/tree/main/cypress/samples). These scripts contain Cypress commands examples which can be usefull for developers.



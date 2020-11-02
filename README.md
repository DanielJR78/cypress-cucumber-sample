# cypress-cucumber-example
Example of using Cypress with Cucumber.

# Init
There are a few tagged tests in these files:

```
npm install
npm test
```  

# Content
### Sample features:
There are a some implemented sample features in these files:

[Facebook.feature](https://github.com/TheBrainFamily/cypress-cucumber-example/blob/master/cypress/integration/socialNetworks/Facebook.feature)
```
@feature-tag
Feature: The Facebook

  I want to open a social network page

  @tag-to-include
  Scenario: Opening a social network page
    Given I open Facebook page
    Then I see "Facebook" in the title

  @another-tag-to-include @some-other-tag
  Scenario: Different kind of opening
    Given I kinda open Facebook page
    Then I am very happy

```

### Sample scripts:
There are a few tagged tests in these files:



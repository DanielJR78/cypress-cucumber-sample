Feature: Login Required Actions

  Background:
    Given I search for "monopatin"
    And I navigate to result # "8" Item page

  Scenario: Login required for Process order from Cart page
    Given I add the current item to the cart
    And I navigate to the Cart page from Confirm page
    When I select Process order action from Cart page
    Then I should be redirected to the Signin page

  Scenario: Login required for Process order from Added Confirm page
    Given I add the current item to the cart       
    When I select Process order action from Confirm page
    Then I should be redirected to the Signin page

  Scenario: Login required for Buy now action        
    When I select Buy now action for current item
    Then I should be redirected to the Signin page

  Scenario: Login required for Add to wish list action        
    When I select Add to wish list action for current item
    Then I should be redirected to the Signin page

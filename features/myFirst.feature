Feature: Is it Friday yet
  Everybody wants to know when it's Friday

  Scenario: Sunday isnt Friday
    Given today is Sunday
    When I ask whether its Friday yet
    Then I should be told

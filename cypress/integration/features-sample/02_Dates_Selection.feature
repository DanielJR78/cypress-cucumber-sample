
Feature: Dates selection rules
'''
          * By default, departure date is set to today and return to tomorrow
          * We can select departure for current day or later, and return for departure day or later
          * When we select a departure date after return, return is automatically set to the same date
          * When we select a return date before departure, departure is automatically set to the same date
          * When we select the 1-way trip option, return date is automatically hidden and selected departure date is kept
          * When we select the return trip option, return date is displayed again and set to departure day's next day
'''
  Background:
    Given I select random origin and destination stations


  Scenario: Departure today and return tomorrow by default
      Then departure should be set to current date plus 0 days
       And return should be set to current date plus 1 days


  Scenario Outline: Reset sets back default dates
       Given I move departure date by <depart> days
       And I move return date by <return> days
       When I reset selected dates
       Then departure should be set to current date plus 0 days
        And return should be set to current date plus 1 days
          Examples:
          |depart|return|
          |0     |1     |
          |0     |2     |
          |0     |-1    |
          |1     |0     |
          |1     |1     |
          |4     |8     |


    Scenario Outline: Departure date cannot be set before today
       When I move departure date by <depart> days
       Then departure should be set to current date plus <departSet> days
          Examples:
          |depart|departSet|
          |-1    |0        |
          |-5    |0        |


    Scenario Outline: Return date cannot be set before today
       When I move return date by <return> days
       Then return should be set to current date plus <returnSet> days
          Examples:
          |return|returnSet|
          |-1    |0        |
          |-3    |0        |


    Scenario Outline: Setting departure date after return moves return to the same date
       Given I move return date by <return> days
       When I move departure date by <depart> days
       Then return should be set to current date plus <returnSet> days
          Examples:
          |return|depart|returnSet|
          |1     |2     |2        |
          |3     |8     |8        |


  Scenario Outline: Setting return date before departure moves departure to the same date
     Given I move departure date by <depart> days
     When I move return date by <return> days
     Then departure should be set to current date plus <departSet> days
        Examples:
          |depart|return|departSet|
          |1     |-1    |0        |
          |8     |-3    |5        |


  Scenario Outline: Setting 1-way trip option keeps departure date and hides return date
     Given I move departure date by <depart> days
     When I select the one-way trip option
     Then departure should be set to current date plus <departSet> days
        Examples:
          |depart|departSet|
          |1     |1        |
          |8     |8        |


  Scenario Outline: Setting return trip option keeps departure date and sets return for next day
     Given I move departure date by <depart> days
     And I move return date by <return> days
     When I select the one-way trip option
     And I select the return trip option
     Then departure should be set to current date plus <departSet> days
     And return should be set to current date plus <returnSet> days
      Examples:
        |depart|return|departSet|returnSet|
        |2     |5     |2        |3        |
        |4     |5     |4        |5        |
        |9     |6     |9        |10       |

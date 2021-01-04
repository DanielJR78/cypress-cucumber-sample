
Feature: Passengers selection rules
'''
          * Only 1 adult passenger is pre-selected by default
          * Number of selected passengers is displayed at any moment as selection changes
          * We must select at least 1 passengers with seat (adult or child)
          * We can select at most 9 passengers
          * We cannot select more children with no than passengers with seat (adults or children)
          * We can select children with seat without any adult
'''
  Background:
    Given I select random origin and destination stations


  Scenario: Only 1 adult passenger selected by default
    Then the selected number of adults should be 1
    And the selected number of children with no seat should be 0
    And the selected number of children with seat should be 0


  Scenario Outline: Total passengers is displayed
    When I select <adults>, <childrenSeat> and <childrenNoSeat> passengers
    Then the number of passengers displayed should be <total>
        Examples:
          |adults     |childrenSeat|childrenNoSeat|total      |
          |1          |1           |1             |3          |
          |1          |2           |2             |5          |
          |4          |0           |3             |7          |
          |6          |0           |0             |6          |


  Scenario Outline: At most 9 passengers are selected
    When I select <adults>, <childrenSeat> and <childrenNoSeat> passengers
    Then I should not be able to add any kind of passengers
        Examples:
          |adults     |childrenSeat|childrenNoSeat|
          |9          |0           |0             |
          |8          |0           |1             |
          |4          |5           |0             |
          |3          |3           |3             |
          |4          |4           |1             |
          |1          |8           |0             |


  Scenario Outline: At least 1 passenger with seat is selected
    When I select <adultsPre>, <childrenSeat> and <childrenNoSeat> passengers
    And I select <adults> adults
    Then I should not be able to remove any kind of passengers
        Examples:
          |adultsPre  |childrenSeat|childrenNoSeat|adults     |
          |1          |0           |0             |1          |
          |1          |1           |0             |0          |


  Scenario Outline: At most 1 no seat per 1 with seat passenger
    When I select <adultsPre>, <childrenSeat> and <childrenNoSeat> passengers
    And I select <adults> adults
    Then I should not be able to add more children with no seat
        Examples:
          |adultsPre  |childrenSeat|childrenNoSeat|adults |
          |4          |0           |4             |4      |
          |3          |0           |3             |3      |
          |2          |2           |4             |2      |
          |1          |3           |4             |1      |
          |1          |4           |4             |0      |


  Scenario Outline: Children with seat without any adult
    When I select <adultsPre>, <childrenSeat> and <childrenNoSeat> passengers
    And I select <adults> adults
    Then the selected number of adults should be 0
        Examples:
          |adultsPre  |childrenSeat|childrenNoSeat|adults |
          |1          |1           |0             |0      |
          |1          |4           |0             |0      |
          |1          |4           |4             |0      |

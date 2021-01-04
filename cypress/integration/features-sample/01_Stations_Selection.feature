
Feature: Station selection rules
'''
          * By default Departure/Arrival stations are empty and search train disabled
          * Display error message when entering unexisting stations
          * Search trains disabled while some unexisting station
          * [TODO] Automcomplete works correctly
'''

  Scenario: Search unaccessible and empty stations by default
    Then origin station is empty
     And destination station is empty
     And I should not be able to search for trains

  Scenario Outline: Search unaccessible and error msg when unexisting origin st.
    When I search for <origin> origin station
    Then an error message should be displayed on origin station
    And I should not be able to search for trains
    And an error message should be displayed on origin station
      Examples:
        |origin             |
        |'sfsdfsdfsfsdsf'   |
        |'chicago'          |

  Scenario Outline: Search unaccessible and error msg when unexisting destination st.
    When I search for <destination> destination station
    Then I should not be able to search for trains
    And an error message should be displayed on destination station
      Examples:
        |destination        |
        |'pueblo'           |
        |'pekin'            |

  Scenario Outline: Search accessible when both stations exist
    When I select <origin> as origin station
     And I select <destination> as destination station
    Then I should be able to search for trains
      Examples:
        |origin                         |destination                    |
        |'BARCELONA-SANTS'              |'BARCELONA-PASSEIG DE GRACIA'  |
        |'MADRID-CHAMARTIN'             |'MADRID-PUERTA DE ATOCHA'      |

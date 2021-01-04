
Feature: Train selection rules
'''
          * Display error message for not connected stations
          * Display cheapest rate for any available train
          * [TODO] We must select Outward before Return rate
          * [TODO] We can select Outward-Return rate only if we do it on both trains
'''

  Scenario Outline: Connected stations
    Given I select from <origin> to <destination> stations
    And I move departure date by 4 days
    When I search for trains
    Then I should be redirected to train selection
    And no error message should be displayed on train list
      Examples:
        | origin                        | destination                 |
        |'MADRID-CHAMARTIN'             |'MADRID-PUERTA DE ATOCHA'    |
        |'SEVILLA-SANTA JUSTA'          |'SEVILLA-SAN BERNARDO'       |
        |'SEVILLA-SANTA JUSTA'          |'SEVILLA-VIRGEN DEL ROCIO'   |
        |'VALENCIA-ESTACIO DEL NORD'    |'VALENCIA-CABANYAL'          |


  Scenario Outline: Not connected stations
      Given I select from <origin> to <destination> stations
      And I move departure date by 4 days
      When I search for trains
      Then I should be redirected to train selection
      And an error message should be displayed on train list
        Examples:
          | origin                        | destination                   |
          |'MADRID-CHAMARTIN'             |'MADRID - ATOCHA CERC'         |
          |'MADRID-PUERTA DE ATOCHA'      |'MADRID - ATOCHA CERC'         |
          |'BARCELONA-SANTS'              |'BARCELONA-PASSEIG DE GRACIA'  |
          |'BARCELONA-SANTS'              |'BARCELONA-ESTACIO DE FR'      |
          |'VALENCIA-ESTACIO DEL NORD'    |'VALENCIA JOAQUIN SOROLLA'     |
          |'VALENCIA-CABANYAL'            |'MADRID-PUERTA DE ATOCHA'      |


  Scenario: Price from labels displayed
      Given I select random origin and destination stations
      And I move departure date by 4 days
      When I search for trains
      Then I should be redirected to train selection
      And any Price from label should be coherent with available rates
      

Feature: Search items
  
  Scenario Outline: Search with results    
    Given I search for <existingItem>
    Then I should be redirected to the Results page
    And result header should contain <existingItem>
    And any result title should contain <existingItem> 
      Examples:
      | existingItem    | 
      | "portátil"      | 
      | "Agua"          | 

  Scenario Outline: Search without results
    Given I search for <unexistingItem>
    Then I should be redirected to the No results page
      Examples:
      | unexistingItem  |
      | "jgffxxwwzz"    |
      | "tttttttt"      |

  Scenario Outline: Sort results by price ascendant    
    Given I search for <existingItem>
    When I sort results by price asc
    Then I should be redirected to the Results page
    And any result should have a price lower than next one
      Examples:
      | existingItem    |      
      | "coche"         |
      | "tablet"        |
      
  Scenario Outline: Filter results by brands
    Given I search for <existingItem>
    When I filter results by brands <brandFilters>
    Then I should be redirected to the Results page
    And result header should contain <existingItem>
    And result header should contain <brandFilters> 
    And any result title should contain one of the texts <brandFilters>
      Examples:
      | existingItem    | brandFilters     |
      | "patinete"      | "Hudora,HOMCOM"  |
      | "patinete"      | "Hudora"         |



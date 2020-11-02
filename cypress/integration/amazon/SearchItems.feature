Feature: Search items

  Background:
    Given I navigate to HomePage
    And I accept cookies policies
  
  Scenario Outline: Search with results
    When I search for <existingItem>
    Then I should be redirected to the Results page
    And result header should contain <existingItem>
    And any result title should contain <existingItem> 
      Examples:
      | existingItem    | 
      | "Patinete"      | 
      | "Agua"          | 

  Scenario Outline: Search without results
    When I search for <unexistingItem>
    Then I should be redirected to the No results page
      Examples:
      | unexistingItem  |
      | "jgffxxwwzz"    |
      | "tttttttt"      |

  Scenario Outline: Sort results by price ascendant
    When I search for <existingItem>
    And I sort results by price asc
    Then I should be redirected to the Results page
    And any result should have a price lower than next one
      Examples:
      | existingItem    |
      | "monopatin"     |
      | "patinete"      |
      
  Scenario Outline: Filter results by brands
    When I search for <existingItem>
    And I filter results by brands <brandFilters>
    Then I should be redirected to the Results page
    And result header should contain <existingItem>
    And result header should contain <brandFilters> 
    And any result title should contain one of the brands <brandFilters>
      Examples:
      | existingItem    | brandFilters    |
      | "patinete"      | "Apollo"        |
      | "patinete"      | "Apollo,Fascol" |
      | "monopatin"     | "meteor"        |
      | "monopatin"     | "Hudora,Mondo"  |



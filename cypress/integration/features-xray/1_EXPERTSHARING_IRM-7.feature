@EXPERTSHARING_IRM-26
Feature: Default

	Background:
		#@EXPERTSHARING_IRM-7
		Given I select random origin and destination stations



	@EXPERTSHARING_IRM-4 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario: [BDD] Selected dates by default
		Then departure should be set to current date plus 0 days
		 And return should be set to current date plus 1 days


	@EXPERTSHARING_IRM-3 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Departure date today or later
		When I move departure date by <depart> days
		Then departure should be set to current date plus <departSet> days

		  Examples:
		      |depart|departSet|
		      |-1    |0        |
		      |-5    |0        |


	@EXPERTSHARING_IRM-11 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Return date today or later
		When I move return date by <return> days
		Then return should be set to current date plus <returnSet> days

		  Examples:
		      |return|returnSet|
		      |-1    |0        |
		      |-3    |0        |


	@EXPERTSHARING_IRM-12 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Setting departure after return moves return to same date
		Given I move return date by <return> days
		When I move departure date by <depart> days
		Then return should be set to current date plus <returnSet> days

		  Examples:
		      |return|depart|returnSet|
		      |1     |2     |2        |
		      |3     |8     |8        |


	@EXPERTSHARING_IRM-13 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Setting return before departure moves departure to same date
		Given I move departure date by <depart> days
		When I move return date by <return> days
		Then departure should be set to current date plus <departSet> days

		    Examples:
		      |depart|return|departSet|
		      |1     |-1    |0        |
		      |8     |-3    |5        |


	@EXPERTSHARING_IRM-14 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Selecting return trip option keeps departure and set return to next day
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


	@EXPERTSHARING_IRM-15 @EXPERTSHARING_IRM-10 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Selecting one-way trip option keeps departure and hides return date
		Given I move departure date by <depart> days
		When I select the one-way trip option
		Then departure should be set to current date plus <departSet> days

		    Examples:
		      |depart|departSet|
		      |1     |1        |
		      |8     |8        |


	@EXPERTSHARING_IRM-17 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario: [BDD] Selection by default is one adult
		Then the selected number of adults should be 1
		 And the selected number of children with seat should be 0
		 And the selected number of children with no seat should be 0


	@EXPERTSHARING_IRM-18 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Total passengers is displayed
		When I select <adults>, <childrenSeat> and <childrenNoSeat> passengers
		Then the number of passengers displayed should be <total>

		    Examples:
		      |adults     |childrenSeat|childrenNoSeat|total      |
		      |1          |1           |1             |3          |
		      |1          |2           |2             |5          |
		      |4          |0           |3             |7          |
		      |6          |0           |0             |6          |


	@EXPERTSHARING_IRM-19 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Total passengers is maximum 9
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

	#Assert than total passengers is minimum 1
	@EXPERTSHARING_IRM-20 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Total passengers is minimum 1
		When I select <adultsPre>, <childrenSeat> and <childrenNoSeat> passengers
		And I select <adults> adults
		Then I should not be able to remove any kind of passengers

		    Examples:
		      |adultsPre  |childrenSeat|childrenNoSeat|adults     |
		      |1          |0           |0             |1          |
		      |1          |1           |0             |0          |

	#Assert than not more passengers with no seat than with seat
	@EXPERTSHARING_IRM-21 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27 @EXPERTSHARING_IRM-30
	Scenario Outline: [BDD] Not more passengers with no seat than with seat
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

	#Assert than not more passengers with no seat than with seat
	@EXPERTSHARING_IRM-28 @EXPERTSHARING_IRM-16 @EXPERTSHARING_IRM-27
	Scenario Outline: [BDD] Children with seat without any adult
		When I select <adultsPre>, <childrenSeat> and <childrenNoSeat> passengers
		And I select <adults> adults
		Then the selected number of adults should be 0

		    Examples:
		      |adultsPre  |childrenSeat|childrenNoSeat|adults |
		      |1          |1           |0             |0      |
		      |1          |4           |0             |0      |
		      |1          |4           |4             |0      |

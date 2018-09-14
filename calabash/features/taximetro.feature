Feature: Calculating the taxi fare

  Scenario: AS an user, I want to be able to calculate the fare of a taxi ride              
    When I swipe left
    And I press "Taxímetro"
    Then I enter "130" into input field 
    Then I should see "$11.400"
    Then I should see "Unidades"    
    Then I should see "Recargos"

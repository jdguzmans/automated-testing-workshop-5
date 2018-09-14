Feature: Calculating the taxi fare

  Scenario: AS an user, I want to be able to query a route from two Transmilenio stations            
    Given I press "Viajar en Transmi, SITP o taxi"
    Then I press "Tu ubicación"
    Then I enter "Calle 106" into input field "Tu ubicación"
    Then I press "Auto Norte / Cll 106"
    Then I press "Punto de destino"
    Then I enter "Universidades" into input field "Busca paradero de destinoi"  
    Then I press "Cra 3 / Cll. 22"
    Then I press "Calcular"
    Then I should see "8"
    Then I should see "Con destino Guatoque-Veragueas, vagón 2"

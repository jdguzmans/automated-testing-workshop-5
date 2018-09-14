Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"               
    When I swipe left
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"
Feature: Register into losestudiantes
    As an user I want to register at losestudiantes website in order to rate teachers

Scenario Outline: Signup failing with wrong inputs but succeding with valid input

  Given I go to losestudiantes home screen
    When I open the login screen
    And I register with firstname <firstName> and lastname <lastName> and email <email> and programId <programId> and password <password> and <acceptedTerms> accepted terms
    And I try to signup
    Then I expect to see first error <error1> and second error <error2> and third error <error3>

    Examples:
      | firstName | lastName | email         | error1                   | programId | password   | error2                                          | acceptedTerms | error3                                    |
      | Juan      | Gomez    | sasaf         | Ingresa un correo valido | 59        | s          | La contraseña debe ser al menos de 8 caracteres | didNot        | Debes aceptar los términos y condiciones  |
      | Juan      | Gomez    | sffff@kk.co   | noError                  | 59        | s          | La contraseña debe ser al menos de 8 caracteres | didNot        | Debes aceptar los términos y condiciones  |
      | Juan      | Gomez    | sffff@kk.co   | noError                  | 59        | s8sl5sks8  | noError                                         | didNot        | Debes aceptar los términos y condiciones  |
      | Juan      | Gomez    | sfs@sfs.cpm   | noError                  | 59        | s4d5e8d2s  | noError                                         | did           | noError                                   |
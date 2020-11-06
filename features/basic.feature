Feature: Login
  Eu como usuario 
  Gostaria de fazer login na aplicacao
  Para acessar o sistema

  Scenario: Login with success
    Given I fill mail
    And I fill password
    When I tap on Entrar
    Then I see the Salvar button
    

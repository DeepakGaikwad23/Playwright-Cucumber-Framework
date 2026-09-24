Feature: SauceDemo Login

  @smoke
  Scenario: Login with valid credentials

    Given I am on the SauceDemo login page

    When I login with valid credentials

    Then I should see the products page
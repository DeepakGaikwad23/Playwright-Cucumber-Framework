Feature: SauceDemo Purchase

  @regression
  Scenario: Purchase Sauce Labs Backpack

    Given I am on the SauceDemo login page

    When I login with valid credentials

    Then I should see the products page

    When I add the configured product to the cart

    And I open the shopping cart

    Then I should see the configured product in the cart

    When I checkout with customer details

    And I finish the order

    Then I should see the order confirmation
Feature: End to end Ecommerce validation

    Application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open eCommerce page
    And select the Shop Page
    When I add items to cart
    And validate the total prices
    Then Select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open eCommerce page
    When I fill the form details
    |name | gender |
    |bobz | Male |
    Then validate the forms behavior
    And select the Shop Page
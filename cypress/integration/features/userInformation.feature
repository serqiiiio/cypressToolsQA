Feature: User information
    Scenario: Test user information
        Given I go to the page "https://demoqa.com/webtables"
        When I click on the edit button of Alden Cantrell
        And I fill all the spaces of Registration Form
        And I confirm the filling of spaces
        Then I validate the changes
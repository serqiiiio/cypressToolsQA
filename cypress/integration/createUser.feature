Feature: User information
    Scenario: Create user information
        Given I am in webtables page
        When  I create a new user
        And I fill the Registration Form
            | firstName  | Sergio               |
            | lastName   | Salinas              |
            | email      | serqio.kay@gmail.com |
            | age        | 30                   |
            | salary     | 100000               |
            | department | automation           |
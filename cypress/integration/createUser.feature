@Create @Functional @Tc001
Feature: User information
    Scenario: Create user information
        Given I am in webtables page
        When  I create a new user with the following information
            | firstName  | Paulo                |
            | lastName   | Salinas              |
            | email      | serqio.kay@gmail.com |
            | age        | 30                   |
            | salary     | 100000               |
            | department | automation           |
        Then I should see the information updated in the table
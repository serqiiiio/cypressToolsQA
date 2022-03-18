Feature: User information
    Scenario: Edit user information
        Given I am in webtables page
        And I have the UpdateUser user
            #with the following
            #with the UpdateUser
            #add tags
            #change hardcode values
            #sufix cahnge random values
            | firstName  | UpdateUser    |
            | lastName   | Test          |
            | email      | test@test.com |
            | age        | 99            |
            | salary     | 1             |
            | department | test          |
        When I edit the user information with the following information
            | firstName  | Juan               |
            | lastName   | Velez              |
            | email      | juan.kay@gmail.com |
            | age        | 29                 |
            | salary     | 1                  |
            | department | dev                |
        Then I should see the information updated in the table





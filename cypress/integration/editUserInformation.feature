Feature: User information
    Scenario: Edit user information
        Given I am in webtables page
        When I select the user that needs the information changed
        And I fill the Registration Form
            | firstName  | Sergio               |
            | lastName   | Salinas              |
            | email      | serqio.kay@gmail.com |
            | age        | 30                   |
            | salary     | 100000               |
            | department | automation           |
        Then I verify the changes


#     Given I am in web-tables page //puede ser un json

#     Then I should see the information updated in the table // reivsar BDD and 3 amigos session




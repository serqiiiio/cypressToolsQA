Feature: User information
    Scenario: Edit user information
        Given I am in webtables page
        When I edit the user information with the following information
            | firstName  | Sergio               |
            | lastName   | Salinas              |
            | email      | serqio.kay@gmail.com |
            | age        | 30                   |
            | salary     | 100000               |
            | department | automation           |
        Then I verify the changes

#     Then I should see the information updated in the table // reivsar BDD and 3 amigos session




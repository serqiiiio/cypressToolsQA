Feature: User information
    Scenario: Edit user information
        Given I am in webtables page
        #I have user for update Ver si existe o no
        #agregar When Alden
        When I edit the user information with the following information
            | firstName  | Sergio               |
            | lastName   | Salinas              |
            | email      | serqio.kay@gmail.com |
            | age        | 30                   |
            | salary     | 100000               |
            | department | automation           |
        Then I should see the information updated in the table
#borrar Sergio user




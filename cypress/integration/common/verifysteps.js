import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I should see the information updated in the table", (dataTable) => {
  cy.fixture("tableValues").then((data) => {
    cy.verifyContent(data, data.firstName);
  });
});

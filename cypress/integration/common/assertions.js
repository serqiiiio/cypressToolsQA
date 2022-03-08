import { Then } from "cypress-cucumber-preprocessor/steps";

Then("I should see the information updated in the table", () => {
  cy.fixture("tableValues").then((data) => {
    cy.verifyContent(data, "Sergio");
  });
});

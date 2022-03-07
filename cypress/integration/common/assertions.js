Then("Then I should see the information updated in the table", () => {
  cy.fixture("tableValues").then((data) => {
    cy.log(data);
    cy.verifyContent(data);
  });
});

import { When } from "cypress-cucumber-preprocessor/steps";
import CreateUser from "../../ui/locators/createUser";
import RegistrationForm from "../../ui/locators/registrationForm";

When("I create a new user with the following information", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  cy.writeFile("cypress/fixtures/tableValues.json", infoTable);
  CreateUser.addBtn().click();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

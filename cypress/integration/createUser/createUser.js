import { When } from "cypress-cucumber-preprocessor/steps";
import CreateUser from "../pageObject/createUser";
import RegistrationForm from "../pageObject/registrationForm";

When("I create a new user with the following information", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  CreateUser.addBtn().click();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

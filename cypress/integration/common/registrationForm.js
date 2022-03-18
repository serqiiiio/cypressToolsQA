import { When } from "cypress-cucumber-preprocessor/steps";
import RegistrationForm from "../../ui/locators/registrationForm";

When("I fill the Registration Form", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

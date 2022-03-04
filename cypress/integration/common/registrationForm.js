import { When } from "cypress-cucumber-preprocessor/steps";
import RegistrationForm from "../pageObject/registrationForm";

When("I fill the Registration Form", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  cy.fillRegistrationForm(
    infoTable.firstName,
    infoTable.lastName,
    infoTable.email,
    infoTable.age,
    infoTable.salary,
    infoTable.department
  );
  RegistrationForm.confirmationBtn().click();
});

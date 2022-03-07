import { When } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../ui/locators/userInformation";
import RegistrationForm from "../ui/locators/registrationForm";

When("I edit the user information with the following information", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  cy.writeFile("cypress/fixtures/tableValues.json", infoTable);
  UserInfo.clickEditBtnAlden().click();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

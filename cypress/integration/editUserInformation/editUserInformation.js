import { Given, When, After } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../../ui/locators/userInformation";
import RegistrationForm from "../../ui/locators/registrationForm";
import CreateUser from "../../ui/locators/createUser";

const userInfo = new UserInfo();
let oldUserName = "";
let newUserName = "";

Given("I have the following user", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  oldUserName = infoTable.firstName;
  CreateUser.addBtn().click();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

When("I edit the user information with the following information", (dataTable) => {
  const infoTable = dataTable.rowsHash();
  newUserName = infoTable.firstName;

  cy.writeFile("cypress/fixtures/tableValues.json", infoTable);
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);
  userInfo.clickEditBtnUserNeeded(`${oldUserName}`).click();
  cy.fillRegistrationForm(infoTable);
  RegistrationForm.confirmationBtn().click();
});

After(() => {
  userInfo.clickDeleteBtnUserNeeded(`${newUserName}`).click();
});

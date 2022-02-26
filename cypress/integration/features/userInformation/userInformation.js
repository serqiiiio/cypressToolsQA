import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../../pageObject/userInformation";
import RegistrationForm from "../../pageObject/registrationForm";

Given(`I go to the page {string}`, (page) => {
  cy.visit(page);
});

When("I click on the edit button of Alden Cantrell", () => {
  UserInfo.clickEditBtnAlden().click();
});

When("I fill all the spaces of Registration Form", () => {
  cy.fixture("registrationForm").then((data) => {
    cy.fillRegistrationForm(
      data.Sergio.firstName,
      data.Sergio.lastName,
      data.Sergio.email,
      data.Sergio.age,
      data.Sergio.salary,
      data.Sergio.department
    );
  });
});

When("I confirm the filling of spaces", () => {
  RegistrationForm.confirmationBtn().click();
});

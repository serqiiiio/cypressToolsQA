import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../../pageObject/userInformation";
import RegistrationForm from "../../pageObject/registrationForm";
import { expect } from "chai";

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

Then("I validate the changes", () => {
  UserInfo.sergioName().should("have.text", "Sergio");
  UserInfo.sergioLastname().should("have.text", "Salinas");
  UserInfo.sergioEmail().should("have.text", "serqio.kay@gmail.com");
  UserInfo.sergioAge().should("have.text", "30");
  UserInfo.sergioSalary().should("have.text", "100000");
  UserInfo.sergioDepartment().should("have.text", "automation");
});

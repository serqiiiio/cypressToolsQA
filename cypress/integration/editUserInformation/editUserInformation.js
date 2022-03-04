import { When, Then } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../pageObject/userInformation";

When("I select the user that needs the information changed", () => {
  UserInfo.clickEditBtnAlden().click();
});

//deberia poder llenar los campos con solo 2 o 3 campos
// no todos solo algunos
//strategy pattern con los arrow functions
//tomar clean code o defensive code
//convenciones analizadores de codigo poner eslint

Then("I verify the changes", () => {
  //que este en otro file
  //guardar informacion en la tabla
  //step del edit que se esta gurdando en algun lado

  cy.fixture("registrationForm").then((data) => {
    UserInfo.sergioName().should("have.text", data.newUser.firstName);
    UserInfo.sergioLastname().should("have.text", data.newUser.lastName);
    UserInfo.sergioEmail().should("have.text", data.newUser.email);
    UserInfo.sergioAge().should("have.text", data.newUser.age);
    UserInfo.sergioSalary().should("have.text", data.newUser.salary);
    UserInfo.sergioDepartment().should("have.text", data.newUser.department);
  });
});

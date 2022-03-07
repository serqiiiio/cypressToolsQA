import { When, Then } from "cypress-cucumber-preprocessor/steps";
import UserInfo from "../pageObject/userInformation";
import RegistrationForm from "../pageObject/registrationForm";

When(
  "I edit the user information with the following information",
  (dataTable) => {
    const infoTable = dataTable.rowsHash();
    cy.writeFile("cypress/fixtures/writeFiles/tableComplete.json", infoTable);
    UserInfo.clickEditBtnAlden().click();
    cy.fillRegistrationForm(infoTable);
    RegistrationForm.confirmationBtn().click();
  }
);

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

class RegistrationForm {
  userName() {
    return cy.get("#firstName");
  }
  lastName() {
    return cy.get("#lastName");
  }
  userEmail() {
    return cy.get("#userEmail");
  }
  age() {
    return cy.get("#age");
  }
  salary() {
    return cy.get("#salary");
  }
  department() {
    return cy.get("#department");
  }
  confirmationBtn() {
    return cy.get("#submit");
  }
}
export default new RegistrationForm();

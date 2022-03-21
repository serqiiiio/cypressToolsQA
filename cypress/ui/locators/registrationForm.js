class RegistrationForm {
  /**
   * The method gets the locator for userName text box in the registration form
   **/
  userName() {
    return cy.get("#firstName");
  }

  /**
   * The method gets the locator for lastName text box in the registration form
   **/
  lastName() {
    return cy.get("#lastName");
  }

  /**
   * The method gets the locator for email text box in the registration form
   **/
  userEmail() {
    return cy.get("#userEmail");
  }

  /**
   * The method gets the locator for age text box in the registration form
   **/
  age() {
    return cy.get("#age");
  }

  /**
   * The method gets the locator for salary text box in the registration form
   **/
  salary() {
    return cy.get("#salary");
  }

  /**
   * The method gets the locator for department text box in the registration form
   **/
  department() {
    return cy.get("#department");
  }

  /**
   * The method gets the locator for the button submit in the registration form
   **/
  confirmationBtn() {
    return cy.get("#submit");
  }
}
export default new RegistrationForm();

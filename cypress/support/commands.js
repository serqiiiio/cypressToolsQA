import RegistrationForm from "../integration/pageObject/registrationForm";

Cypress.Commands.add(
  "htmlRequestManager",
  (verb, baseUrl, body = "", uri = "") => {
    cy.request({
      method: `${verb}`,
      url: `${baseUrl}${uri}`,
      auth: {
        bearer: Cypress.env("token"),
      },
      body: body,
    });
  }
);

Cypress.Commands.add(
  "fillRegistrationForm",
  (firstName, lastName, userEmail, age, salary, department) => {
    RegistrationForm.userName().clear().type(firstName);
    RegistrationForm.lastName().clear().type(lastName);
    RegistrationForm.userEmail().clear().type(userEmail);
    RegistrationForm.age().clear().type(age);
    RegistrationForm.salary().clear().type(salary);
    RegistrationForm.department().clear().type(department);
  }
);

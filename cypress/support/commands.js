import RegistrationForm from "../integration/pageObject/registrationForm";

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

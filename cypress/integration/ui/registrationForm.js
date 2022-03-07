import RegistrationForm from "./locators/registrationForm";

function FirstName() {
  this.fillValue = (userName) => {
    RegistrationForm.userName().clear().type(userName);
  };
}

function LastName() {
  this.fillValue = (lastName) => {
    RegistrationForm.lastName().clear().type(lastName);
  };
}

function UserEmail() {
  this.fillValue = (userEmail) => {
    RegistrationForm.userEmail().clear().type(userEmail);
  };
}

function Age() {
  this.fillValue = (age) => {
    RegistrationForm.age().clear().type(age);
  };
}

function Salary() {
  this.fillValue = (salary) => {
    RegistrationForm.salary().clear().type(salary);
  };
}

function Department() {
  this.fillValue = (department) => {
    RegistrationForm.department().clear().type(department);
  };
}

export class RegistrationFormStrategyManager {
  constructor() {
    this.textBox = null;
  }

  setStrategy(textBox) {
    this.textBox = textBox;
  }

  fillValue(value) {
    this.textBox.fillValue(value);
  }
}

const firstName = new FirstName();
const lastName = new LastName();
const email = new UserEmail();
const age = new Age();
const salary = new Salary();
const department = new Department();

export const fieldClassLookup = {
  firstName,
  lastName,
  email,
  age,
  salary,
  department
};

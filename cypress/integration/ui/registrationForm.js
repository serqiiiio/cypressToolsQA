import RegistrationForm from "./locators/registrationForm";

function FirstName() {
  /**
   * The method fill the first name text box of the registration form
   * @param {string} userName is the value that We are going to add in the text box
   */
  this.fillValue = (userName) => {
    RegistrationForm.userName().clear().type(userName);
  };
}

function LastName() {
  /**
   * The method fill the last name text box of the registration form
   * @param {string} lastName is the value that We are going to add in the text box
   */
  this.fillValue = (lastName) => {
    RegistrationForm.lastName().clear().type(lastName);
  };
}

function UserEmail() {
  /**
   * The method fill the email text box of the registration form
   * @param {string} userEmail is the value that We are going to add in the text box
   */
  this.fillValue = (userEmail) => {
    RegistrationForm.userEmail().clear().type(userEmail);
  };
}

function Age() {
  /**
   * The method fill the age text box of the registration form
   * @param {string} age is the value that We are going to add in the text box
   */
  this.fillValue = (age) => {
    RegistrationForm.age().clear().type(age);
  };
}

function Salary() {
  /**
   * The method fill the salary text box of the registration form
   * @param {string} salary is the value that We are going to add in the text box
   */
  this.fillValue = (salary) => {
    RegistrationForm.salary().clear().type(salary);
  };
}

function Department() {
  /**
   * The method fill the department text box of the registration form
   * @param {string} department is the value that We are going to add in the text box
   */
  this.fillValue = (department) => {
    RegistrationForm.department().clear().type(department);
  };
}

/**
 * The class is for manage the strategy pattern
 **/
export class RegistrationFormStrategyManager {
  constructor() {
    this.textBox = null;
  }

  /**
   * The method sets the strategy that We are going to use
   * @param {instance} userData is the class that We are going to use
   **/

  setStrategy(textBox) {
    this.textBox = textBox;
  }

  /**
   * The method execute the method fillValue of the selected Class
   * @param {string} value is the value that We are going to use for filling the text box
   **/

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

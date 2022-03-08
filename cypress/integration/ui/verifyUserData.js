import UserInfo from "../ui/locators/userInformation";

const userInfo = new UserInfo();

class NewUserfirstName {
  /**
   * The method verify the text of firstName text box
   * @param {string} data is the value of key firstName
   */
  verifyData(data) {
    userInfo.newUserName().should("have.text", data);
  }
}

class NewUserLastName {
  /**
   * The method verify the text of lastName text box
   * @param {string} data is the value of key lastName
   */
  verifyData(data) {
    userInfo.newUserLastname().should("have.text", data);
  }
}
class NewUserAge {
  /**
   * The method verify the text of age text box
   * @param {string} data is the value of key age
   **/
  verifyData(data) {
    userInfo.newUserAge().should("have.text", data);
  }
}

class NewUserEmail {
  /**
   * The method verify the text of email text box
   * @param {string} data is the value of key email
   **/
  verifyData(data) {
    userInfo.newUserEmail().should("have.text", data);
  }
}

class NewUserDepartment {
  /**
   * The method verify the text of email text box
   * @param {string} data is the value of key email
   **/
  verifyData(data) {
    userInfo.newUserDepartment().should("have.text", data);
  }
}

class NewUserSalary {
  /**
   * The method verify the text of salary text box
   * @param {string} data is the value of key salary
   **/
  verifyData(data) {
    userInfo.newUserSalary().should("have.text", data);
  }
}

/**
 * The class is for manage the strategy pattern
 **/
export class UserVerifyTextStrategyManager {
  constructor() {
    this.userData = null;
  }

  /**
   * The method sets the strategy that We are going to use
   * @param {instance} userData is the class that We are going to use
   **/
  setStrategy(userData) {
    this.userData = userData;
  }

  /**
   * The method execute the method verifyData of the selected Class
   * @param {keyValue} data is the key value that We are going to use
   * @param {string} name is the name of the user that we are going to verify
   **/
  verifyData(data, name) {
    userInfo.setUserName(name);
    this.userData.verifyData(data);
  }
}

const firstName = new NewUserfirstName();
const lastName = new NewUserLastName();
const age = new NewUserAge();
const email = new NewUserEmail();
const department = new NewUserDepartment();
const salary = new NewUserSalary();

export const userDataClassLookup = {
  firstName,
  lastName,
  email,
  age,
  salary,
  department
};

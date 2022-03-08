import UserInfo from "../ui/locators/userInformation";

const userInfo = new UserInfo();

class NewUserfirstName {
  verifyData(data) {
    userInfo.newUserName().should("have.text", data);
  }
}

class NewUserLastName {
  verifyData(data) {
    userInfo.newUserLastname().should("have.text", data);
  }
}

class NewUserAge {
  verifyData(data) {
    userInfo.newUserAge().should("have.text", data);
  }
}

class NewUserEmail {
  verifyData(data) {
    userInfo.newUserEmail().should("have.text", data);
  }
}

class NewUserDepartment {
  verifyData(data) {
    userInfo.newUserDepartment().should("have.text", data);
  }
}

class NewUserSalary {
  verifyData(data) {
    userInfo.newUserSalary().should("have.text", data);
  }
}

export class UserVerifyTextStrategyManager {
  constructor() {
    this.userData = null;
  }

  setStrategy(userData) {
    this.userData = userData;
  }

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

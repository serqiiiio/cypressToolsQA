import UserInfo from "../pageObject/userInformation";

class NewUserfirstName {
  verifyData(data) {
    UserInfo.newUserName().should("have.text", data);
  }
}

class NewUserLastName {
  verifyData(data) {
    UserInfo.newUserLastname().should("have.text", data);
  }
}

class NewUserAge {
  verifyData(data) {
    UserInfo.newUserAge().should("have.text", data);
  }
}

class NewUserEmail {
  verifyData(data) {
    UserInfo.newUserEmail().should("have.text", data);
  }
}

class NewUserDepartment {
  verifyData(data) {
    UserInfo.newUserDepartment().should("have.text", data);
  }
}

class NewUserSalary {
  verifyData(data) {
    UserInfo.newUserSalary().should("have.text", data);
  }
}

export class UserVerifyTextStrategyManager {
  constructor() {
    this.userData = null;
  }

  setStrategy(userData) {
    this.userData = userData;
  }

  verifyData(data) {
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

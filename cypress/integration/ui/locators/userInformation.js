class UserInfo {
  constructor() {
    this.user = "";
  }

  setUserName(name) {
    this.user = name;
  }

  clickEditBtnUserNeeded(user) {
    return cy.xpath(`//div[@class='rt-tr-group'][contains(.,'${user}')] //span[@class='mr-2']`);
  }

  clickDeleteBtnUserNeeded(user) {
    return cy.xpath(`//div[@class='rt-tr-group'][contains(.,'${user}')] //span[@title='Delete']`);
  }

  newUserName() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[1]`
    );
  }

  newUserLastname() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[2]`
    );
  }

  newUserAge() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[3]`
    );
  }

  newUserEmail() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[4]`
    );
  }

  newUserSalary() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[5]`
    );
  }

  newUserDepartment() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[6]`
    );
  }
}
export default UserInfo;

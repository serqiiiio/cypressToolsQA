class UserInfo {
  constructor() {
    this.user = "";
  }
  /**
   * The method sets the user name that we are going to use in locators
   * @param {string} name is the key value that We are going to use
   **/

  setUserName(name) {
    this.user = name;
  }

  /**
   * The method make click to the edit button of a selected user
   * @param {string} user is name of the selected user
   **/
  clickEditBtnUserNeeded(user) {
    return cy.xpath(`//div[@class='rt-tr-group'][contains(.,'${user}')]//span[@title='Edit']`);
  }

  /**
   * The method make click to the delete button of a selected user
   * @param {string} user is name of the selected user
   **/
  clickDeleteBtnUserNeeded(user) {
    return cy.xpath(`//div[@class='rt-tr-group'][contains(.,'${user}')] //span[@title='Delete']`);
  }

  /**
   * The method gets the locator for the information in the table of username
   **/
  newUserName() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[1]`
    );
  }

  /**
   * The method gets the locator for the information in the table of lastName
   **/
  newUserLastname() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[2]`
    );
  }

  /**
   * The method gets the locator for the information in the table of age
   **/
  newUserAge() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[3]`
    );
  }

  /**
   * The method gets the locator for the information in the table of email
   **/
  newUserEmail() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[4]`
    );
  }

  /**
   * The method gets the locator for the information in the table of salary
   **/
  newUserSalary() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[5]`
    );
  }

  /**
   * The method gets the locator for the information in the table of department
   **/
  newUserDepartment() {
    return cy.xpath(
      `(//div[@class='rt-tr-group'][contains(.,'${this.user}')]//div[@class='rt-td'])[6]`
    );
  }
}
export default UserInfo;

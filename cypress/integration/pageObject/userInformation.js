class UserInfo {
  clickEditBtnAlden() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Alden')] //span[@class='mr-2']"
    );
  }
  newUserName() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'Sergio')]"
    );
  }
  newUserLastname() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'Salinas')]"
    );
  }
  newUserAge() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,30)]"
    );
  }
  newUserEmail() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'serqio.kay@gmail.com')]"
    );
  }
  newUserSalary() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'100000')]"
    );
  }
  newUserDepartment() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'automation')]"
    );
  }
}
export default new UserInfo();

class UserInfo {
  clickEditBtnAlden() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Alden')] //span[@class='mr-2']"
    );
  }
  sergioName() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'Sergio')]"
    );
  }
  sergioLastname() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'Salinas')]"
    );
  }
  sergioAge() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,30)]"
    );
  }
  sergioEmail() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'serqio.kay@gmail.com')]"
    );
  }
  sergioSalary() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'100000')]"
    );
  }
  sergioDepartment() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Sergio')] //div[@class='rt-td'][contains(.,'automation')]"
    );
  }
}
export default new UserInfo();

class UserInfo {
  clickEditBtnAlden() {
    return cy.xpath(
      "//div[@class='rt-tr-group'][contains(.,'Alden')] //span[@class='mr-2']"
    );
  }
}
export default new UserInfo();

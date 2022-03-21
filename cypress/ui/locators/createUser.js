class CreateUser {
  /**
   * The method gets the locator for the button Add in the main page
   **/
  addBtn() {
    return cy.get("#addNewRecordButton");
  }
}
export default new CreateUser();

class CreateUser {
  addBtn() {
    return cy.get("#addNewRecordButton");
  }
}
export default new CreateUser();

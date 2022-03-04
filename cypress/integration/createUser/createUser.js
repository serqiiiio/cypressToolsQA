import { When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateUser from "../pageObject/createUser";

When("I create a new user", () => {
  CreateUser.addBtn().click();
});

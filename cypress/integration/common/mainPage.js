import { Given } from "cypress-cucumber-preprocessor/steps";
import env from "../../../envConfig.json";

const url = env.test.url;
Given("I am in webtables page", () => {
  cy.visit(url);
});
cy.log("hola mundo");

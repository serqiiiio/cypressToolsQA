import { Given } from "cypress-cucumber-preprocessor/steps";
import env from "../../../envConfig.json";

let url = env.test.url;
Given(`I am in webtables page`, () => {
  cy.visit(url);
});

import { Given } from "cypress-cucumber-preprocessor/steps";
Given(`I am in webtables page`, () => {
  cy.visit("https://demoqa.com/webtables");
});

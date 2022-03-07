import {
  RegistrationFormStrategyManager,
  fieldClassLookup,
} from "../integration/strategy/registrationForm";

Cypress.Commands.add("fillRegistrationForm", (tableObjectValues) => {
  const registrationFormStrategy = new RegistrationFormStrategyManager();
  for (const key in tableObjectValues) {
    cy.log(key);
    registrationFormStrategy.setStrategy(fieldClassLookup[key]);
    registrationFormStrategy.fillValue(tableObjectValues[key]);
  }
});

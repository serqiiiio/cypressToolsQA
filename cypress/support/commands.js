import {
  RegistrationFormStrategyManager,
  fieldClassLookup,
} from "../integration/strategy/registrationForm";
import {
  UserVerifyTextStrategyManager,
  userDataClassLookup,
} from "../integration/strategy/verifyUserData";

Cypress.Commands.add("fillRegistrationForm", (tableObjectValues) => {
  const registrationFormStrategy = new RegistrationFormStrategyManager();
  for (const key in tableObjectValues) {
    registrationFormStrategy.setStrategy(fieldClassLookup[key]);
    registrationFormStrategy.fillValue(tableObjectValues[key]);
  }
});

Cypress.Commands.add("verifyContent", (objectValues) => {
  const verifyDataStrategy = new UserVerifyTextStrategyManager();
  for (const key in objectValues) {
    verifyDataStrategy.setStrategy(userDataClassLookup[key]);
    verifyDataStrategy.verifyData(objectValues[key]);
  }
});

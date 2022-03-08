import {
  RegistrationFormStrategyManager,
  fieldClassLookup
} from "../integration/ui/registrationForm";
import {
  UserVerifyTextStrategyManager,
  userDataClassLookup
} from "../integration/ui/verifyUserData";

/**
 * The function fills the registration form of the required text boxes.
 * @param {JSON} tableObjectValues is a Json of the data tables.
 */
Cypress.Commands.add("fillRegistrationForm", (tableObjectValues) => {
  const registrationFormStrategy = new RegistrationFormStrategyManager();
  for (const key in tableObjectValues) {
    registrationFormStrategy.setStrategy(fieldClassLookup[key]);
    registrationFormStrategy.fillValue(tableObjectValues[key]);
  }
});

/**
 * The function verify the text content of the required text boxes.
 * @param {JSON} objectValues is a Json of the data used to fill the text boxes.
 * @param {string} name is the user name that we are going to verify the data.
 */
Cypress.Commands.add("verifyContent", (objectValues, name) => {
  const verifyDataStrategy = new UserVerifyTextStrategyManager();
  for (const key in objectValues) {
    verifyDataStrategy.setStrategy(userDataClassLookup[key]);
    verifyDataStrategy.verifyData(objectValues[key], name);
  }
});

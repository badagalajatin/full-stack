// Import the external validator package
const validator = require("validator");

const validEmail = "student@example.com";
const invalidEmail = "student@example";

console.log("NPM AND PACKAGE.JSON DEMONSTRATION");

console.log("\nValid Email:");
console.log(validEmail);

console.log("Is valid:", validator.isEmail(validEmail));

console.log("\nInvalid Email:");
console.log(invalidEmail);

console.log("Is valid:", validator.isEmail(invalidEmail));

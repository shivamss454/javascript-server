"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./helpers.js");
const validEmail = [];
const invalidEmail = [];
const validateUsers = function (users) {
    users.forEach((element) => {
        const { traineeEmail, reviewerEmail } = element;
        if (helpers_js_1.validateEmail(traineeEmail))
            validEmail.push(traineeEmail);
        else
            invalidEmail.push(traineeEmail);
        if (helpers_js_1.validateEmail(reviewerEmail))
            validEmail.push(reviewerEmail);
        else
            invalidEmail.push(reviewerEmail);
    });
};
exports.validateUsers = validateUsers;
//validateUsers(users);
console.log(`valid emails: ${validEmail}`);
console.log("invalid emails: " + invalidEmail);
console.log("valid count: " + validEmail.length);
console.log("invalid count: " + invalidEmail.length);
//# sourceMappingURL=validation.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("./helpers.js");
exports.validEmail = [];
exports.invalidEmail = [];
const validateUsers = (users) => {
    users.forEach((element) => {
        const { traineeEmail, reviewerEmail } = element;
        if (helpers_js_1.validateEmail(traineeEmail))
            exports.validEmail.push(traineeEmail);
        else
            exports.invalidEmail.push(traineeEmail);
        if (helpers_js_1.validateEmail(reviewerEmail))
            exports.validEmail.push(reviewerEmail);
        else
            exports.invalidEmail.push(reviewerEmail);
    });
};
exports.validateUsers = validateUsers;
// validateUsers(users);
console.log(`valid emails: ${exports.validEmail}`);
console.log('invalid emails: ' + exports.invalidEmail);
console.log('valid count: ' + exports.validEmail.length);
console.log('invalid count: ' + exports.invalidEmail.length);
//# sourceMappingURL=validation.js.map
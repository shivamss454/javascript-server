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
//# sourceMappingURL=validation.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateEmail = function (email) {
    console.log("-=-=-=-=-", email);
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
    return regex.test(email);
};
exports.validateEmail = validateEmail;
//# sourceMappingURL=helpers.js.map
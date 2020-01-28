"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const utils_3 = require("./utils");
const users = [
    {
        traineeEmail: 'shivam.sharma@successive.tech',
        reviewerEmail: 'megha.rawat@succssive.tech'
    },
    {
        traineeEmail: 'neha.goel@succesive.tech',
        reviewerEmail: 'megha.rawat@successive.tech'
    }
];
// import { validateEmail, validateUsers} from "./utils";
patterns_1.fun(5);
patterns_1.myfun(5);
utils_1.hasPermission('getUsers1', 'vinay', 'read+');
utils_2.validateUsers(users);
console.log('valid count: ' + utils_3.validEmail.length);
console.log('invalid count: ' + utils_3.invalidEmail.length);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns_1 = require("./patterns");
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const users = [
    {
        traineeEmail: "shivam.sharma@successive.tech",
        reviewerEmail: "megha.rawat@succssive.tech"
    },
    {
        traineeEmail: "neha.goel@succesive.tech",
        reviewerEmail: "megha.rawat@successive.tech"
    }
];
//import { validateEmail, validateUsers} from "./utils";
patterns_1.fun();
patterns_1.myfun();
utils_1.hasPermission('getUsers1', 'vinay', 'read');
utils_2.validateUsers(users);
//# sourceMappingURL=index.js.map
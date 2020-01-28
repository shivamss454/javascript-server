"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_js_1 = require("../constants.js");
function hasPermission(module, role, permissionType) {
    //console.log(user['getUsers1'].all, user['getUsers2'].read);le.write) && (permissionType===module.write))
    let user = constants_js_1.permissions[module];
    if (!permissionType || !user[permissionType])
        console.log(`${role} doesn't have permission to access ${permissionType}`);
    return user[permissionType].some(element => {
        if (element === role) {
            console.log(`${role} have permission to access ${permissionType}`);
            return true;
        }
        else {
            console.log(`${role} doesn't have permission to access ${permissionType}`);
            return false;
        }
    });
}
exports.default = hasPermission;
//console.log(hasPermission('getUsers1', 'vinay', 'write'));
//console.log(hasPermission('getUsers1', 'shivam', 'write'));
//console.log(hasPermission('getUsers1', 'mayankcd ', 'write'));
//export {permissions};
//# sourceMappingURL=permissions.js.map
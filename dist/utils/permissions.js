"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_js_1 = require("../constants.js");
function hasPermission(module, role, permissionType) {
    const user = constants_js_1.permissions[module];
    if (!permissionType || !user[permissionType])
        console.log(`${role} doesno't have permission to access ${permissionType}`);
    else {
        if (user[permissionType].indexOf(role) >= 0) {
            console.log(`${role} have permission to access ${permissionType}`);
            return true;
        }
        else {
            console.log(`${role} doesn't have permission to access ${permissionType}`);
            return false;
        }
        // return user[permissionType].some(element => {
        //   if (element === role) {
        //     console.log(`${role} have permission to access ${permissionType}`);
        //     return true;
        //   }
        //   else
        //   {
        //     console.log(`${role} doesn't have permission to access ${permissionType}`);
        //     return false;
        //   }
        // });
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map
import { permissions } from './constants';
export default function  hasPermission(modulename, role: string, permissiontype: string): boolean {
const roles = permissions[modulename][permissiontype];
let decide = false;
roles.forEach(element => {
    if (element === role) {
        decide = true;
    }
});
return decide;
}
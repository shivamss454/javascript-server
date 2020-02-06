export default function  hasPermission(modulename, role: string, permissiontype: string) :boolean{
console.log('&&&&', modulename);
const roles = modulename[permissiontype];
let decide = false;
console.log(roles);
roles.forEach(element => {
    if (element === role) {
        decide = true;
    }
});
return decide;
}
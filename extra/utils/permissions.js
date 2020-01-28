import {permissions} from "../constants.js";
export default function hasPermission(module, role, permissionType){
  //console.log(user['getUsers1'].all, user['getUsers2'].read);le.write) && (permissionType===module.write))

  let user = permissions[module];
  if (!permissionType || !user[permissionType])
    console.log(`${role} doesn't have permission to access ${permissionType}`);

    else{
      if(user[permissionType].indexOf(role)>=0) {
  
        console.log(`${role} have permission to access ${permissionType}`);
        return true 
      } else {
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
    //console.log(hasPermission('getUsers1', 'vinay', 'write'));
//console.log(hasPermission('getUsers1', 'shivam', 'write'));
//console.log(hasPermission('getUsers1', 'mayankcd ', 'write'));
//export {permissions};
    }
  }
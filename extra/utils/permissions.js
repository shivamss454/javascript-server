import {permissions} from "../constants.js";
export default function hasPermission(module, role, permissionType){
  
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
  
    }
  }

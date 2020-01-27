const permissions = {
  'getUsers1': {
    all: ['prabal-raghav'],
    read: ['shivam', 'vinay'],
    write: ['vinay'],
    delete: ['prabal-raghav']
  },
  'getUsers2': {
    all: ['prabal-raghav'],
    read: ['neha', 'vinay'],
    write: ['vinay'],
    delete: ['prabal-raghav']
  }
}
hasPermission = (module, role, permissionType) => {
  //console.log(user['getUsers1'].all, user['getUsers2'].read);le.write) && (permissionType===module.write))

  const user = permissions[module];
  if (!permissionType || !user[permissionType])
    console.log(`${role} doesn't have permission to access ${permissionType}`);

  return user[permissionType].some(element => {
    if (element === role) {
      console.log(`${role} have permission to access ${permissionType}`);
      return true;
    }
    else
    {
      console.log(`${role} doesn't have permission to access ${permissionType}`);
      return false;
    }
  });


}
console.log(hasPermission('getUsers1', 'vinay', 'write'));
console.log(hasPermission('getUsers1', 'shivam', 'write'));
console.log(hasPermission('getUsers1', 'mayank', 'write'));

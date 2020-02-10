import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './userModel';
import IUserCreate from './entities/IUserCreate';

export class  UserRepository {
private UserModel: mongoose.Model<IUserModel>;

constructor() {
 this.UserModel = userModel;

}
create = (data) => {
    return this.UserModel.create(data);
}

count = () => {
 console.log('Hello');
 return this.UserModel.countDocuments();
}
findUpdate = data => {
return this.UserModel.findById(data);
}
 update = (_id, data) => {
     return this.UserModel.update(_id, data);

 }
list = (_id) => {
    return this.UserModel.find(_id);
}
delete = (id) => {
    return this.UserModel.deleteOne(id);
}
}
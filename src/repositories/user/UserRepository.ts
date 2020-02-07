import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import {userModel} from './userModel';
import IUserCreate from './entities/IUserCreate';

export class  UserRepository {
private UserModel: mongoose.Model<IUserModel>;

constructor() {
 this.UserModel = userModel;

}
create = (data: IUserCreate) => {
    return this.UserModel.create(data);
}

count = () => {
 console.log('Hello');
 return this.UserModel.countDocuments();
}
update = () => {
    return this.UserModel.update();

}
list = () => {
    return this.UserModel.find();
}
delete = () => {
    
}
}
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './userModel';
import IUserCreate from './entities/IUserCreate';
import VersionableRepository from '../Versionable/VersionableRepository';


export class  UserRepository extends VersionableRepository <IUserModel, mongoose.Model<IUserModel>> {
private UserModel: mongoose.Model<IUserModel>;
private UserRepository : UserRepository;
constructor() {
    super(userModel);
   }
/**
static instance: UserRepository;
static getInstance = () => {
    if (UserRepository.instance) {
        return UserRepository.instance;
    }
    UserRepository.instance = new UserRepository();
    return UserRepository.instance;
} 


public static generateObjectId() {
return String(mongoose.Types.ObjectId());
}
*/

create = (data: any) => {
    return super.create(data);
}

public count = () => {
 return super.count();
}
findUpdate = data => {
return this.UserModel.findById(data);
}
findOne = data => {
    return this.UserModel.findById(data);
    }
    
 update = (_id, data) => {
     // this.findUpdate(id);
     return super.update(_id, data);

 }
list = (_id) => {
    return this.UserModel.find(_id);
}
delete = (id) => {
    return this.UserModel.deleteOne(id);
}
}
import * as mongoose from 'mongoose';
import Userschema from './UserSchema';
import IUserModel from './IUserModel';

export const userschema = new  Userschema({
    collection: 'users',

});
export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('user', userschema, 'users', true);
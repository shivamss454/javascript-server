import * as mongoose from 'mongoose';
import userschema from './UserSchema';
import IUserModel from './IUserModel';
export const userschema = new  userschema({
    collection: 'users',

});
export const userModel: mongoose.Model<IUserModel>=mongoose.Model<IUserModel>('user',userschema,'users',true)
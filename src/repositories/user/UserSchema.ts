import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
const userschema = new mongoose.Schema({
id: string,
name: string,
address: string,
email: string,
dob: Date,
mobilenumber: string,
hobbies: string[],


});
export default userschema;
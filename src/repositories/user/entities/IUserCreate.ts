import * as mongoose from'mongoose';


export default interface IUserCreate extends mongoose.Document {
    name: string;
    address: string;
    email: string;
    dob: Date;
    mobilenumber: number;
    hobbies: string[];
    }


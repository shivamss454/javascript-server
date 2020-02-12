import * as mongoose from'mongoose';


export default interface IUserCreate  {
    name: string;
    address: string;
    email: string;
    dob: Date;
    mobilenumber: number;
    hobbies: string[];
    role: string;
    }


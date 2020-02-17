import * as mongoose from'mongoose';
import IVersionableModel from '../Versionable/IVersionableDocument';
export default interface IUserModel extends IVersionableModel {
    id: string;
    name: string;
    address: string;
    email: string;
    dob: Date;
    mobilenumber: number;
    hobbies: string[];
    role: string;
    }
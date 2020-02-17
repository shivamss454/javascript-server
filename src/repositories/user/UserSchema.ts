import * as mongoose from 'mongoose';
import VersionableSchema from '../Versionable/VersionableSchema';
// import { permissions } from 'src/libs/routes/constants';
class Userschema extends VersionableSchema {
constructor(collections: any) {
    const baseSchema = {
     id: String,
     name: String,
     address: String,
     email: String,
     dob: Date,
     mobilenumber: String,
     hobbies: [String],
     role: String

   };
   super(baseSchema, collections);
  }
}
export default Userschema;
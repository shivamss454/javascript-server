import * as mongoose from 'mongoose';

// import { permissions } from 'src/libs/routes/constants';
class Userschema extends mongoose.Schema {
constructor(options: any) {
    const userschema = {
     id: String,
     name: String,
     address: String,
     email: String,
     dob: Date,
     mobilenumber: String,
     hobbies: [String],
     role: String

   };
   super(userschema, options);
  }
}
export default Userschema;
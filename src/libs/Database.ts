import * as mongoose from 'mongoose';
import { resolve } from 'dns';
import SeedData from './SeedData';
class Database {
  static open = (mongoUri: string) => {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoUri, { useNewUrlParser: true }, (err) => {
        if (err) {
          console.log('Error in mongodb');
          return reject(err);
        }
        resolve({ name: 'data' });
        SeedData();
        console.log('database connected successfully');
      });


    });
  }
  static disconnect = () => {
    mongoose.connection.close();
    console.log(' db disconnected ');

  }
}
export default Database;
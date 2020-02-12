import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
   constructor(schema, options) {
    const baseschema = {
        createdAt: {
            type: Date,
            default: Date.now
        }
        , originalId: String
    };

    super({...schema, ...baseschema}, options);
   }

}
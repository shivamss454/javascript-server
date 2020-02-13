import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
   constructor(schema, options) {
    const baseschema = {
        createdAt:  Date,
        updatedAt:  Date,
        deletedAt:  Date,
        createdBy:  String,
        updatedBy:  String,
        deletedBy:  String,
        originalId: String
    };
    super({...schema, ...baseschema}, options);
   }

}
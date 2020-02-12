import * as mongoose from 'mongoose';
import { stringify } from 'querystring';
import IVersionableModel from './IVersionableDocument';

export default class  VersionableRepository <D extends mongoose.Document , m extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    private modelType: m;
    constructor(modelType) {
        this.modelType = modelType;
    }
    public create(options): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        console.log('ssssss',options);
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id
         });
    }
    public count()  {
        return this.modelType.countDocuments();
    }

}
import * as mongoose from 'mongoose';
import { stringify } from 'querystring';
import IVersionableModel from './IVersionableDocument';

export default class  VersionableRepository <D extends mongoose.Document , m extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    protected modelType: m;
    constructor(modelType) {
        this.modelType = modelType;
    }
    public create(options): Promise<D> {
        const id = VersionableRepository.generateObjectId();
         console.log('ssssss', options);
        return this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: new Date(),
            createdBy: id,
         });
    }

    public async update(id, options): Promise<D> {
     const id1 = await VersionableRepository.generateObjectId();
     const prevData = await this.modelType.findById(id).lean();
     const newObj = await Object.assign({...prevData, 'updatedAt': new Date()}, options);
     console.log('----prevData-----', prevData);
     console.log('----new object-----', newObj);
    const updateData = await this.modelType.updateOne(id, {deletedAt: new Date()});
     console.log('----updateData-----', updateData);

      const{email, dob, role, name, hobbies, updatedAt, updatedBy} = newObj;
         return this.modelType.create({
            updatedAt,
            updatedBy,
             email,
             dob,
             role,
             name,
             hobbies
         });
    }
    public count()  {
        return this.modelType.countDocuments();
    }


}
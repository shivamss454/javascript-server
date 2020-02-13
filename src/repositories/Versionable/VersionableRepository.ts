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
     const id1 = VersionableRepository.generateObjectId();
     const prevData = await this.modelType.findOne(id);
     const newObj = { ...prevData};
     console.log('----prevData-----', prevData);
     console.log('----new object-----', newObj);
     await this.modelType.updateOne(id, {deletedAt: new Date()});
    //  console.log('----updateData-----', updateData);
      const key1 = Object.keys(options);
      key1.forEach( key => {
        newObj[key] = options[key];
      });
      console.log('---new object is------', newObj);
         return this.modelType.create({
         newObj
     });
    }
    public count()  {
        return this.modelType.countDocuments();
    }


}
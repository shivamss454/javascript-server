import * as mongoose from 'mongoose';
import { stringify } from 'querystring';
import IVersionableModel from './IVersionableDocument';
import SystemResponse from '../../libs/SystemResponse';

export default class  VersionableRepository <D extends mongoose.Document , m extends mongoose.Model<D>> {
    protected modelType: m;
    constructor(modelType) {
        this.modelType = modelType;
    }
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public async create(options): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        return  await this.modelType.create({
            ...options,
            _id: id,
            originalId: id,
            createdAt: new Date(),
            createdBy: id,
         });
    }

    public async update(id, options): Promise<D> {
     const id1 = await VersionableRepository.generateObjectId();
     const originalId = id;
     const prevData = await this.modelType.findOne({originalId }).lean();
     console.log('prev data=', prevData);
     const updateData = await this.modelType.findOneAndUpdate({originalId , deletedAt: undefined}, {deletedAt: new Date(), deletedBy: id});
     const newObj = await Object.assign({...prevData, 'updatedAt': new Date(), 'updatedBy': id}, options);
     console.log(newObj, 'new obj===');
      const{email, dob, role, name, hobbies, updatedAt, updatedBy , mobilenumber, address} = newObj;
         return this.modelType.create({
            originalId: id,
            updatedAt,
            updatedBy,
             email,
             dob,
             role,
             name,
             hobbies,
             mobilenumber,
             address
         });


   // SystemResponse.success(res)
    console.log('record not found' );

    }
    public count()  {
        return this.modelType.countDocuments();
    }
    public async delete(id): Promise<D> {

        const data = await this.modelType.findById(id).lean();
         console.log(id , ' user is deleted');
         return await this.modelType.findByIdAndUpdate(id , {deletedAt: new Date()});
    }
  public async findall() {
      return await this.modelType.find();
  }

}
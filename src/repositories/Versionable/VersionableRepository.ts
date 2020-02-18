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
     const prevData = await this.modelType.findById(id).lean();
     const newObj = await Object.assign({...prevData, 'updatedAt': new Date(), 'updatedBy': id}, options);
    const updateData = await this.modelType.updateOne(id, {deletedAt: new Date() , deletedBy: id});

      const{email, dob, role, name, hobbies, updatedAt, updatedBy , mobilenumber, address, password} = newObj;
         return this.modelType.create({
            updatedAt,
            updatedBy,
             email,
             dob,
             role,
             name,
             hobbies,
             mobilenumber,
             address,
             password
         });
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
  public async findbyEmail(data) {
    return await this.modelType.findOne({email: data, deletedAt: undefined});
}

}
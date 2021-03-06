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
     await this.modelType.findOneAndUpdate({originalId , deletedAt: undefined}, {deletedAt: new Date(), deletedBy: id});
     const newObj = await Object.assign({...prevData, 'updatedAt': new Date(), 'updatedBy': id}, options);
      const{email, dob, role, name, hobbies, updatedAt, updatedBy , mobilenumber, address, password} = newObj;
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
             address,
             password
         });
    }
    public count()  {
        return this.modelType.countDocuments({deletedAt: undefined});
    }
    public async delete(id): Promise<D> {

        const data = await this.modelType.findById(id).lean();
         console.log(id , ' user is deleted');
         return await this.modelType.findByIdAndUpdate(id , {deletedAt: new Date()});
    }
  public async findall(skip, limit, sort, search) {
     // tslint:disable-next-line: radix
     const a =  parseInt(skip);
      // tslint:disable-next-line: radix
      const b = parseInt(limit);
     if (!sort && !search) {
         return await this.modelType.find({deletedAt: undefined, role: 'trainee'}).skip(a).limit(b).sort({updatedAt: -1});
     }
        return  await this.modelType.find({...search , deletedAt: undefined, role: 'trainee'}).skip(a).limit(b).sort(sort);

    }

  public async findbyEmail(data) {
    return await this.modelType.findOne({email: data, deletedAt: undefined});
}


}
import { Request, Response } from 'express';
import Systemresponse from '../../libs/SystemResponse';
import { UserRepository } from '../../repositories/user/UserRepository';

class UserController {
    static userRepository: UserRepository;
    static instance: UserController;
    userRepository = new UserRepository();
    static getInstance = () => {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

create = (req: Request, res: Response, next) => {
    try{
         
        console.log('========.Inside create user==========');
        const {email , name, address, dob, hobbies, mobilenumber} = req.body;
        console.log(req.body);
        this.userRepository.create({ name, address, email, dob, mobilenumber, hobbies
        }).then(user => {
            // console.log('user', user);
            return Systemresponse.success(res, user , 'user added successfully');
            
        }).catch(err => {
         throw err;
        });
    }
    catch (err) {
   console.log(err);
    }

    list = (req: Request, res: Response, next) => {
        try {
            console.log(';;;;;Inside List User;;;;;;')
            const { _id } = req.params;
            this.userRepository.list({ _id }).then(user => {
                this.userRepository.list(_id).then(user => {
                    return Systemresponse.success(res, user, 'user listed successfully');
                })

            }).catch(err => {
                throw err;
            })
        }
        catch (err) {

        };
    };

    update = (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside update User==========');
            const { id, dataToUpdate } = req.body;

            this.userRepository.update({ _id: id }, dataToUpdate).then(user => {
                this.userRepository.findUpdate({ _id: id }).then(user => {
                    return Systemresponse.success(res, user, 'user updated successfully');
                }).catch(err => {
                    throw err;
                });
            }).catch(err => {
                throw err;
            });

        }
        catch (err) {

        }
    };

    delete = (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside Delete User==========');
            const { _id } = req.params;
            this.userRepository.delete({ _id }).then(user => {
                this.userRepository.delete(_id)
                    .then(user => {
                        console.log(user);
                        return Systemresponse.success(res, user, 'user Deleted succesfully');
                    })
            }).catch(err => {
                throw err;
            })
        }
        catch (err) {

        };
    };

}
export default UserController.getInstance();
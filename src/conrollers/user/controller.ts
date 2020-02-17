import { Request, Response } from 'express';
import { UserRepository } from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';


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
    try {
        console.log('========.Inside create user==========');
        const {email , name, address, dob, hobbies, mobilenumber} = req.body;

        this.userRepository.create({ name, address, email, dob, mobilenumber, hobbies
        }).then(user => {
            return SystemResponse.success(res, user , 'user added successfully');

        }).catch(err => {
         throw err;
        });
    }
    catch (err) {
   console.log(err);
    }
}

getAllList = (req: Request, res: Response, next) => {
        try {
            console.log(';;;;;Inside List User;;;;;;');

            this.userRepository.findall().then(user => {
                // this.userRepository.list(_id).then(user => {
                    return SystemResponse.success(res, user, 'user listed successfully');
                // });

            }).catch(err => {
                throw err;
            });
        }
        catch (err) {
           return err;
        }
    };

    update = (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside update User==========');
            const { id, dataToUpdate } = req.body;
            this.userRepository.update({ _id: id }, dataToUpdate).then(user => {
                    return SystemResponse.success(res, user, 'user updated successfully');

            }).catch(err => {
                console.log('---userRepository.findUpdate---', err);

                throw err;
            });

        }
        catch (err) {
            return err;
        }
    };

    delete = (req: Request, res: Response, next) => {
        try {

            console.log('========.Inside Delete User==========');
            const { id } = req.params;
                this.userRepository.delete(id)
                     .then(user => {
                        return SystemResponse.success(res, user, 'user Deleted succesfully');
             }).catch(err => {
                 throw err;
             });
        }
        catch( err) {
            return err;
        }
}

}
export default UserController.getInstance();
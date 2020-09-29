import configuration from '../config/Configuration';
import { UserRepository } from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

const userRepository = new UserRepository();
export default () => {
    const user = {
        name: 'HeadTrainer',
        address: 'Noida',
        email: 'vinaychaudhary123@successive.in',
        dob: new Date('12/28/2019'),
        mobilenumber: 9878674323,
        hobbies: ['Touring'],
        role: 'trainer',
 };


userRepository
.count()
.then(count => {
  console.log('bcrypt', bcrypt);
console.log('Count of users is', count);

if (!count) {
  bcrypt.hash(configuration.password, 10, (err, hash) => {
    if (!err)
    console.log('Data seeding in progress', hash);
return userRepository.create({...user, password: hash}).then(res => {
console.log('User seeded successfully', res);
});
});
}

console.log('User already seeded');
})
.catch(err => console.log(err));
};
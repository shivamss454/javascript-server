import configuration from '../config/Configuration';
import { UserRepository } from '../repositories/user/UserRepository';
import { config } from 'dotenv/types';
const userRepository = new UserRepository();
const { password }= configuration;
export default () => {
    const user = {
        name: 'HeadTrainer',
        address: 'Noida',
        email: 'vinaychaudhary123@successive.in',
        dob: new Date('12/28/2019'),
        mobilenumber: 9878674323,
        hobbies: ['Touring'],
        role: 'trainer',
        password: password,
  };


userRepository
.count()
.then(count => {
console.log('Count of users is', count);

if (!count) {
return userRepository.create(user).then(res => {
console.log('User seeded successfully', res);
});
}

console.log('User already seeded');
})
.catch(err => console.log(err));
}
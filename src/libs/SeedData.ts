import { UserRepository } from '../repositories/user/UserRepository';
const userRepository = new UserRepository();
export default () => {
    const user = {
        name: 'HeadTrainer',
        address: 'Noida',
        email: 'vinaychaudhary123@successive.in',
        dob: new Date('12/28/2019'),
        mobilenumber: 9878674323,
        hobbies: ['Touring'],
        role: 'trainer'
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
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 29,
  email: 'jdoe@example.com',
  password: '123$%^!',
  key: 'asdfjkahdskjfhakjshdfk',
}

 const firstName = 'John';
  const lastName = 'Doe';

  const fullName = function (){
    return firstName + '' + lastName
  }
  console.log(user.fullName());
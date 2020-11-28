// Objects
const firstName = 'John';
const lastName = 'Doe';
const age = 29;
const email = 'jdoe@example.com';
const password = '123$%^!';
// const isLoggedIn = false;
// const tweets = [tweet1, tweet2, tweet3];

const names = ['John', 'Jack', 'Jane', 'Jill', 'Kate'];
names[5] = 'Smith';


const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 29,
  email: 'jdoe@example.com',
  password: '123$%^!',
  key: 'asdfjkahdskjfhakjshdfk',
}

// user['firstName'] = 'Smith'; //Set
 //user.isLoggedIn = false; //Set

 console.log(user.firstName); // Get
console.log(user.lastName); // Get

// console.log(names)
// console.log(user)

// Create a function that retrieves the value for the index number given
function getArrayItem (arr, index) {
  console.log('The ' + index + ' index item is ' + arr[index]);
}

// getArrayItem(names, 4);

function getObjectProperty(obj, key) {
  console.log('The ' + key + ' of the user is ' + obj[key]);
}

// getObjectProperty(user, 'lastName');

// id IN CSS -> snake_case
// classs in CSS -> kabab-case
// variables in JS -> camelCase
// Class names in JS -> UpperCamelCase
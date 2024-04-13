// Values are stored in stack 
const name = 'Kalpit' ;
const age = 22 ;

// Reference value are stored in heap 
const person = {
   name: 'Yashit', 
   age : 26 ,
};

let newName = name;
newName = 'Mrunal';

let newPerson = person;
newPerson.name = 'Ram';

console.log(name , newName);
console.log(person , newPerson)
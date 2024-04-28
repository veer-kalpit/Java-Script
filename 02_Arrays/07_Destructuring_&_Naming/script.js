const firstName = "Kalpit";
const lastName = "Thakur";
const age = 22;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

// Destructuring

const todo = {
  id: 1,
  title: "Eat lunch",
  user: {
    name: "Mrunal",
  },
};

const {
  id:todoId,  // Renaming just ':'
  title,
  user: { name }, // Destructuring use Curly Braces after ':'
} = todo;

console.log(name);
console.log(todoId);


const numbers = [21,22,23,24];
const [first , second ,...rest] = numbers;


console.log(first,second , rest);
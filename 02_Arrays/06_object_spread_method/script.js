let x;

const todo = {};

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

const todos = [
  { id: 1, name: "Buy milk" },
  { id: 2, name: "Give milk" },
  { id: 3, name: "Drink milk" },
];

x = todos[2].name;

x = Object.keys(todo).length;
x = Object.keys(todo).values;
x = Object.entries(todo);
x = todo.hasOwnProperty("name");

console.log(x);

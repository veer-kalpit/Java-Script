let x;

const person = {
  name: "Kalpit Thakur",
  age: 22,
  isAdmin: true,
  address: {
    city: "Dumka",
    state: "Jharkand",
  },
};

// access
x = person.address
console.log(x);

// Delete

delete person.age;
console.log(person);
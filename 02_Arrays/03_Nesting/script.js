let x;

const Fruit = ["Apple", "Pear", "Orange"];
const Berries = ["Strawberry", "Blueberry"];

Fruit.push(Berries);

x = Fruit[3];

console.log(Fruit);
console.log(x);


// Concation

let y ;
 y = Fruit.concat(Berries);
 console.log(y);

//  Spread 
let z;
z = [...Fruit,...Berries];
console.log(z);

// Flatten
let a;
const arrr= [1,2,[3,4],5,[6,7],8,9];
a = arrr.flat()
console.log(a);

// Static method on array 
let b;
b= Array.isArray(Berries);
console.log(b);

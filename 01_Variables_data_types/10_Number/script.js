const num = 5 ;
console.log(typeof num);
const digit = new Number(21.2208);
console.log(typeof digit);

// To get Number as a String 

let x;
x = digit.toString();
console.log(x);

// To get length of Number 

let y;
y = digit.toString().length;
console.log(y);

// To specify the numbers of decimal point

let z;
z = digit.toFixed(2);
console.log(z);

// TO get number in total

let a;
a = digit.toPrecision(3);
console.log(a);

// To get Exponential
 
let b;
b = digit.toExponential(2);
console.log(b);




const cel =  (f) => ((f - 32) * 5) / 9;

console.log(`The Temperature is ${cel(50)}\xB0C`);


// Challenge 2 

(
   (arr) => {
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      console.log('Min :-' +min);
      console.log("Max :-" +max);
   }
)([1,2,3,4,5,6,7,8,9]);

// Challenge 3 

((l,w) => {
   const area = l*w;

   const out = `The area of a rectangle with a length of ${l} and a width of ${w} is ${area}.`;

   console.log(out);
}
)(21,22);

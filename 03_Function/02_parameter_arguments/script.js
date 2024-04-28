function registerUser(user) {
  return user + " is registered";
}

console.log(registerUser("Kalpit"));

// Rest parameter
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1,2,3,4,5,6,2122));


// Objects as parameters

function loginUser (user){
   return ` The user ${user.name} with the id of ${user.id} is logged in `
}

const user = {
   id:1,
   name : 'Kalpit' ,
};

console.log(loginUser(user));

console.log(
   loginUser(
      {
         id:2,
         name:'Mrunal',
      }
   )
);


// Arrays as Parameters 

function getRandom(arr){
   const randomIndex = Math.floor(Math.random()*arr.length);

   const items = arr[randomIndex];
   console.log(items);

}

getRandom([1,2,3,4,5,6,7,8,9,10]);
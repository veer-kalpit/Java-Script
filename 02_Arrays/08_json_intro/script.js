const post = {
  id: 1,
  titlt: "Post one",
  body: "This is the Body",
};

// Convert to JSON string
const str = JSON.stringify(post);

//  Parse JSON

const obj = JSON.parse(str);

console.log(post);
console.log(str);
console.log(obj);

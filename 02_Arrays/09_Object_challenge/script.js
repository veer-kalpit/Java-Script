const lib = [
  {
    title: "Ramayan",
    author: "valmiki jii",
    stutus: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Harry potter ",
    author: "Jk rowling",
    stutus: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mahabharat",
    author: "Shri Krishna",
    stutus: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

lib[0].stutus.read = true;
lib[1].stutus.read = true;
lib[2].stutus.read = true;

console.log(lib);

const { title : firstBook } = lib[0];

console.log(firstBook);

const libJSON =JSON.stringify(lib);
console.log(libJSON);
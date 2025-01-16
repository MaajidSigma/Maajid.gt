const users = [
  {
    name: "Maajid",
    age: 16,
    gender: "male",
  },
  {
    name: "Naufal",
    age: 15,
    gender: "male",
  },
  {
    name: "Alip",
    age: 15,
    gender: "male",
  },
];

const Maajid = users.find((user) => user.name === "Naufal");

console.log(Maajid); // { name: 'Maajid', age: 16, gender: 'male' }

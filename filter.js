const users = [
  {
    name: "Maajid",
    age: 16,
    gender: "male",
  },
  {
    name: "Clara",
    age: 15,
    gender: "female",
  },
  {
    name: "Ibuki",
    age: 11,
    gender: "female",
  },
];

const usersfeMale = users.filter((user) => user.gender === "female");

console.log(usersfeMale);

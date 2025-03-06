// Some code
const Life = {
  // properties
  Species: "human",
  colorbody: "Cream",
  speed: "16 KM/s",
  gender: "boys",
  // methods
  jump: () => {
    console.log("Jumping");
  },
  walk: () => {
    console.log("Walking");
  },
  Run: () => {
    console.log("Runing");
  },
};

console.log(Life.Species); // human
console.log(Life.colorbody); // Cream
console.log(Life.speed); // 16 KM/s
console.log(Life.gender); // boys
Life.jump(); // Jumping
Life.walk(); // Walking
Life.Run(); // Running

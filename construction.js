function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber || `CH-${Math.floor(Math.random() * 100000)}`;
  }
  
  Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
  };
  
  Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`);
  };
  
  Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`);
  };
  
  // Membuat instance dari Car
  const car1 = new Car("Toyota", "Red", 200);
  const car2 = new Car("Honda", "Blue", 220, "CH-12345");
const car3 = new Car("BMW", "Green", 220, "CH-12345");
  
  car1.drive();
  car2.reverse();
  car3.turn();

  console.log(car1); // Lihat detail objek car1
  console.log(car2); // Lihat detail objek car2
console.log(car3);
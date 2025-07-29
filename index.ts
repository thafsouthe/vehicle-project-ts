// Step: Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Step: Implement the Car class
class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Step: Create an instance and call start
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();

"use strict";
// Step: Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Step: Create an instance and call start
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();

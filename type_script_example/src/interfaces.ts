//What we learned:
// Interfaces are used as a contract, mainly with methods

//What we will see:
//Interfaces are used alot like model classes and less like contracts

interface Car {
  run: Function;
  make: string;
  model: string;
}

let myCar: Car = {
  run: function () {
    console.log("I am running");
  },
  make: "Toyota",
  model: "Camry",
};

myCar.run();
console.log(myCar.make, myCar.model);

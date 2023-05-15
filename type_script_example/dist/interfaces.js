"use strict";
//What we learned:
// Interfaces are used as a contract, mainly with methods
let myCar = {
    run: function () {
        console.log("I am running");
    },
    make: "Toyota",
    model: "Camry",
};
myCar.run();
console.log(myCar.make, myCar.model);

"use strict";
//You can also apply type checking to paramaters
const determineIsOld = function (age, firstName) {
    let isOld = false;
    if (age > 100) {
        isOld = true;
    }
    if (isOld) {
        console.log(firstName + " is old, they are " + age);
    }
    else {
        console.log(firstName + " is not old, they are " + age);
    }
};
determineIsOld(21, "Chase");

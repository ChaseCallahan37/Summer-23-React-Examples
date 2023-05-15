//We can use any javascript code within our typescript code

let favColor = "Blue";
console.log(favColor);

//However, we can also add types to our variables

let firstName: string = "Jeff";
console.log(firstName);

//Main types that you will see within typescript

let age: number;
let student: boolean;
let adddress: string;
let students: string[];

//We can also declare things other than primitive types like
//The ones above

let table: HTMLElement;

table = document.createElement("table");

//We can also use the any type, which is the same as not
//specifying a type at all

let car: any = "Ford";
car = 4;

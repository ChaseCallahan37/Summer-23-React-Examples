//You can also apply type checking to paramaters

function convertToDogYears(age: number, firstName: string) {
  let dogYears = age * 7;
  console.log(`The age of ${firstName} in dog years is ${dogYears}`);
}

convertToDogYears(21, "Chase");

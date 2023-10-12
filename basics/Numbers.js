// There are 2 ways of Declaring Numbers in Js
let numVar = 20;
console.table([numVar,typeof numVar])

numVar = new Number(2000000); // Run this example in Console to see the methods / function applied in it
console.log(numVar);
console.table([Number(numVar.toString()),typeof numVar])
console.log(numVar.toFixed(2))
console.log(numVar.toLocaleString('en-In')) // Showing a number according to a specifc country

console.log(Math) // Math object -- Run this line in console to see the functions of math
console.log((Math.random()*10)+1)
// Here Math.random() will print random values from 0 -> 1 . Multiplied by 10, it will be from 0 -> 10
// But if we strictly dont want any values below 1 then we are adding 1 after it
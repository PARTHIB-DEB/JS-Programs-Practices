// Function is a working unit where some instructions are written within that fun's scope and got executed whenever the fun is called
// If we want to call the function within any program, the function must have a name
// Otherwise if we want to deal with its return type then usually we denote the fun by a variable and don't have to give a name then
function callMe(name) {
    // console.log(`Hi, Good Morning ${name}`);
}
// console.log(callMe("Parthib")); // Inside console.log, primarily the function will execute. Then as the function is returning 'undefined' (nothing in JS) so log will print that
// In js, the function's return type dynamically got decided after the execution of the function

// How to return an array from a function where paramteres are more than one (converting values in an array)
// function arrayFyingValue(...numArray) {
//     return numArray
// }
// console.log(arrayFyingValue(20,30,"XYZ"));
function arrayFyingValue(first,...numArray) { // Here arguments are seperated into 2 parts - 1 single parameter and array of n-1 params
    console.log(numArray[1]);
    return first
}
console.log(arrayFyingValue(20,30,"XYZ"));


// How to send object as paramter in the func
const myObj={
    "name":"Parthib",
    "age":21
}
function objectValue(any) { // It is taking a general paramter but its upon user whether use the paramter as an object or not. If object, then it tries to find every keys wanted to print from the object , if not found return 'undef'
    console.log(`name is ${any["name"]},age is ${any.age},birthday is ${any.birth}`);
}
objectValue(myObj)
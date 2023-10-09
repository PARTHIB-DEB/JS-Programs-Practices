// There 7 Primitive datatypes including NAN, Undefined and null
// All the variables of primitive datatype got memory in STACK

// There are 3 Derived/Non-primitive datatype : Array (Homogeneous or not) , Object ,  Functions
// All Non-primitive datatypes got memory in HEAP

"use strict";
let varInt = 10 // Number
let varFloat = 101.90 // Number
let varString = "Parthib" // String
let varDate = new Date() // Object of class Date
const varObj= {
    "name":"Parthib",
    "Roll":27,
    "Dept":"I.T"
}

const arr = ["ABCD","XYZ",123,89] // Array
console.log(arr);
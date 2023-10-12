"use strict";
let varInt = 10 // Number
let varMixed = "101.89abcd@$" // Number
let varBool = true
let varString = "Parthib" // String
let varDate = new Date() // Object of class Date
const varObj= {
    "name":"Parthib",
    "Roll":27,
    "Dept":"I.T"                    
}

const arr = ["ABCD","XYZ",123,89] // Array
console.log(varObj)
console.log(String(varObj))
console.log(Number(varObj)) //  Nan because JS has forcefully converted it into a number which is not a number in reality

console.table([varInt,typeof varInt])
console.table([varInt,typeof varInt])
// In Javascipt , We mostly priorotize scopes over datatypes
// There are 7 datatypes but roughly we can consider it as below:
/*

Object (Most Important Derived datatype,Not class-object of oops, Object are key value pairs enclosed in curly braces)
String,
Number (int/Bigint ,  float)
NaN(Not a number -> values which are not null, non-string but are not in regular range of numbers, Basically when string like 'ABC123a49' are explicitly typecasted to Number then it happens)
null (It is such datatype which is a value of a variable also. Denoting null means 'Empty', But the type of null is 'Object')
undefined(It is also such datatype which can be a value and its type is undefined, simpley means the variable has no memory existance)
*/

// There are 2 scopes 
/*
Local scope/Block scope(Mutable) -> use 'let' keyword before variable
Local scope/Block Scope (Immutable / Constant) (Most Use) -> use 'const' keyword before variable
Global scope (Mutable) (Do not use so much) -> use 'var' keyword before variable
*/
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
console.log(varDate)
console.table([typeof x, typeof y,typeof varString , typeof varDate,typeof varObj])
console.table([
    ["name",varObj["name"],typeof varObj["name"]],
    ["Roll",varObj["Roll"],typeof varObj["Roll"]],
    ["Dept",varObj["Dept"],typeof varObj["Dept"]]
])

// const varObj={          // Throws error as varObj is a constant / it in immutable local scope
//     "name":"Parthib"
// }
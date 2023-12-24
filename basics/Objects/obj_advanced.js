/*
We know that objects are made by properties (key , value pairs). But each property has its own dict,
which allows to decide whether the object will be immutable/constant or mutable
(for same same reason we cannot change value of PI , in js)
*/

const myObj={
    id:101,
    pname:"Parthib",
    email:"pkd@pkd.com"
}

// const descId=Object.getOwnPropertyDescriptor(myObj,"id") // Description / meta-data of a single property
// console.log(descId);

const descProps=Object.getOwnPropertyDescriptors(myObj)  // Description of all properties in the obj
console.log(descProps);

// Let's change the meta data of some properties

Object.defineProperty(myObj,"id",{
    writable:false, // Cannot override / update
    enumerable:false, // Cannot iterate
})
Object.defineProperty(myObj,"email",{
    writable:false, // Cannot override / update
})

const descPropsAgain=Object.getOwnPropertyDescriptors(myObj)  // Description of all properties in the obj
console.log(descPropsAgain);

myObj.id=102;
console.log(myObj.id) // shows 101
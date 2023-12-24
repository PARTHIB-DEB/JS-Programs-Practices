// We can Declare Objects by 2 ways - SingleTon and Non-SingleTon
// SingleTon means calling the Object Constructor and Non-SingleTon are using object liteals
// We can nest objects within objects

//Object Literals (Non-SingleTon)

const mySym=Symbol()
const userDetails={
    name:"Parthib", // name bydefault string type
    "email":"pkd@abc.com",
    [mySym]:"SymValue", // as mySym is a symbol typed key so we have to create it like this
    roll:27,
    isLoggedIn:true
}
// Ways to access
// Dot method (Applied only for String typed keys) , here you don't put ("") or ('') after (.)
// console.log(userDetails.name)
// console.log(userDetails.email)
// square-bracket method or array-access method (Applied for all types of keys , even symbol) , here you have to put "" or '' unless it is not string
// console.log(userDetails["name"])
// console.log(userDetails["email"])
// console.log(userDetails[mySym]) // Accessible by this way only

// Adding Functions

userDetails.greeting=function () {
    console.log(`Hello user ${this.name}`);
}
//console.log(userDetails.greeting); // return the reference of the function
//console.log(userDetails.greeting()); // executes the func and return something or undefined

// How to make an object immutable (Not constant)
// Object.freeze(userDetails)
// userDetails.email="abcd@abcd.com"
// console.log(userDetails["email"])

// SingleTon way
userDetails.persDetail=new Object({branch:"kolkata"})
userDetails.persDetail.salary=1000.00
userDetails.persDetail.loc="dunlop"
// console.log(userDetails.persDetail);
// console.log(userDetails);

// Merging more than 1 objects into a single one (It means just copying all objects data and putting them serially in a target object, not just blunt merging)
const obj1={a:1,11:"b",c:"cde"}
const obj2={ab:11,abe:23,cde:"cdef"}
const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
// console.log(obj3)
// console.log(obj4)

// seperately printing array of keys and array of values in the object
// console.log(Object.keys(userDetails));
// console.log(Object.values(userDetails));

//checking if the object have a specific key or not
console.log(userDetails.hasOwnProperty("phone"))
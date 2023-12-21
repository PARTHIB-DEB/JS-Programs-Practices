/*

The heart of Js is PROTOTYPE.
Js is a onion of prototype . so the properties and methods applied to higher layer automatically transcends to lower ones
The general parent prototype layer of anything is OBJECT.

new keyword - actually injects the default + usermade prototypes inside the stuff
this keyword - basically refer to the current prototype (because maybe two same type's stuffs prototypes become different by some few more methods)

*/

let myArr1 = [1,2] 
// console.log(myArr.prototype) // see in browser
let myObj = {1:2} 
// console.log(myObj.prototype) // see in browser
function myfun(){} 
// console.log(myfun.prototype) // see in browser

/*

How to add custom methods / properties to any stuff's prototype??

>> 1) Addition in a specific local scope : 
        a) addition in a stuff of specific name of a specific type :
        b) addition in a specific kind of dataype
    2) Addition in a global scope (Object)


*/


// 1-a)

function nameMe(name,age){ // This is a constructor function here (by default)
    this.name=name,
    this.age=age
}
// For Functions (we can directly access its prototype)
nameMe.prototype.sayName=function(){
    console.log(`My name is ${this.name}`)
}

let obj=new nameMe("Parthib",21) // so we can do it (Hence we can see everything is an object)
obj.sayName()

////////////////////////////////////////////////////////////////////////////////////////////////

// For arrays (We just have to put the function by member operator '.' , cannot directly access and push at prototypes)
let myArr2 = ["P","A","R","T","H","I","B"]

myArr2.arrLen=function (){
    console.log(`Length is : ${this.length}`)
}

myArr2.arrLen()

/////////////////////////////////////////////////////////////////////////////////

// For Objects (Any method must declare in a key value pair format , inside the object , cannot directly push at prototype)
const details={
    name:"Parthib",
    dept:"IT",
    showdetails : function(){
        console.log(`Name is ${this.name} and dept is ${this.dept}`)
    }
};

details.showdetails()


////////////////////////////////////////////////////////////////

// 1-b)

// By Array (Same for all others)
Array.prototype.hello=function(){
    console.log("Parthib says hello")
}

//////////////////////////////

// 2) Global scope (By Object)
Object.prototype.hi=function(){
    console.log("hiiiii")
} // This implies all other types (arrays , strings , functions) have hi() in their Object prototype layer

new Array().hello() // specific to array
new Array().hi()
new Object().hi()
new Function().hi()

//// Prototypal Inheritance

// Multilevel Inheritance done here

const std={
    name:"Parthib",
    dept:"IT",
    showCGPA:function(){
        console.log("CGPA : 96.5")
    }
}

const sub={
    year:"third",
    sub:4,
    __proto__:std // can do this ourside of 'sub' object also
}

const projects={
    topic:"web-dev"
}
Object.setPrototypeOf(projects,sub)

sub.showCGPA()
console.log(`${projects.name} has done projects on ${projects.topic}`)
sub.showCGPA()
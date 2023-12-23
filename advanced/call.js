/*
To execute a function , we have to call the function by adding '()' after its name - that's natural
But what happens , when one function (parent) calls another function in its scope
Then there comes a problem to the execution of the child function - 
    The child function got executed but it does not put any effect on the parent.
and Now when we creates a new OBJECT of the parent function then this problem happens -  lead to the use of '.call()' to child function
*/

// No problem with functions having integer paramters
// function child(num1,num2,num3){
//     this.num1=num1,
//     this.num2=num2,
//     this.num3=num3
//     console.log("Sum is "+(this.num1+this.num2+this.num3))
// }

// function parent(n1,n2,n3){
//     child(n1,n2,n3)
//     console.log("Parent function called , waiting for child.....")
//     this.n1=n1;
//     this.n2=n2;
//     this.n3=n3;
// }

// //parent(10,11) // No problem
// const parentObj = new parent(10,11,12)
// console.log(parentObj)

function child(username){
    this.username=username
    console.log("Child function executed")
    //return this.username ------ 1
}

function parent(username,email,password){
    console.log("Parent function called , waititng for child....")
    //this.username=child(username) -------- 1
    child.call(this,username) //-------- 2
    this.email=email
    this.password=password
}

const parentObj = new parent("parthib","pkd@pkd.com","pkd123")
console.log(parentObj)


// 1) Native way of taking the return value of the child
// 2) Using .call method and giving current context and appropriate paramters of child function
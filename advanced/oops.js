/*
OOP support came to JS after ES6 .
JS by default is a 'Protoype oriented language' . That means , everything in this lang is defined on the basis of prototype.
Object is the parent protoype (although there are some more prototypes inside object layer) of arrays , functions , strings , objects and all other datatype

For the priviledge of developers of other OOP languages , this feature got included here also.
*/

class abc{
    constructor(x,y){  // Constructor Function
        this.x=x,
        this.y=y;
    }

    show = function (){
        console.log(`X is ${this.x} and Y is ${this.y}`)
        console.log(`${this}`)
    }
}

new abc(10,15).show()
// new abc(20,25).show()
/*
What is 'new' keyword and why it is used ?

>> 1) new is such a keyword which is used to create memory of a certain object (regardless of oops)
    2) Each new object has its own context , so when 'new' keyword creates a new Object-Context , each time it creates a new object , so that the method got applied to right object's context
    3) Each Object has its own prototype , so 'new' keyword is used to inject all those methods and properties that any protorype for any object holds (along with if you want to add any new ones , that also loads)
*/


/*
What is 'this' keyword and why it is used ?

>> There is many execution contexts / scopes in JS . Some stays individually , some NESTED.
    Within a nested contexts , the inner context / scope (maybe of any function or object) is the child scope of its IMMEDIATE OUTER SCOPE / PARENR SCOPE
    So the parent scope has its own parent scope.
    1) So when we use 'this' keyword with any member (props of methods) or use solo , it refers to the current child scope
    2) If there is no nested scope then the parent scope == child scope , so 'this' refers to that single scope

    For objects , console.log(`${this}`) returns the object itself

*/



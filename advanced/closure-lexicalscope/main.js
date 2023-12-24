/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function outer(){
    let num1 = 10

    return function inner(){
        let num2=20;
        console.log("Number at Outer scope , printing from inner scope is :"+num1)
        console.log(`${num1} + ${num2} = ${num1 + num2}`)

        return function demo(){
            console.log("Most Inner function")
        }
    }
}

//const obj = new outer() // Obj is taking the returned reference of outer function by running in firstly
//const obj2 = obj() // Now running the inner function stored in obj
// obj2()
new outer()()() // It's a litle tricky way to write , but if you know you know :D :D
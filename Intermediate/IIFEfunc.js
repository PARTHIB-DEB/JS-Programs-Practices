// IIFE - Immediately Invoked Function Expressions
// Its a way to put some priority on some normal functions to execute them quickly in any cost
// we have to wrap any function (whether normal or arrow) in this style
// in first parenthesis we will wrap the function definition and the second wrap is for both calling and passing args if any , to the function
(function hello(name) {
    console.log(`Hello ${name}`);
})('Parthib')
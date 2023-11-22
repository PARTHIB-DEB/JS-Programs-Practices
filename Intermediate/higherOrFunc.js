// Higher Order functions , are such function which works on any iterable stuff to get some specific data (with the help of loops and conditionals)
// There are 3 higher order Functions : Map , Filter , Reduce
// All they IMPLICITELY returns something rather than Undefined

// By higher-Order loop (for-each loop)
const myArr=[1,2,3,4,5]
// let res=myArr.forEach((item)=>item) // return undefined or returning nothing IMPLICITLY
// console.log(res);

// const resArr =[] // explicitely taken
// myArr.forEach((item)=>{
//     if (item>=2){
//         resArr.push(item);
//     }
//     return resArr
// })
// console.log(resArr); // returning the empty array by fuilling values


// using map
// map , is such a fun which is used to do an operation(another fun) to each item of an array/iterable stuff
let res=myArr.map((item)=>item) // returning a new array under the roof of 'res'
console.log(res);
res=myArr.map((item)=>{ // as an obj-scope or block-scope opened so , have to add 'return' statement
    return item+10;
})
console.log(res);

// using filter
// filter , is such a fun which is used to filter-out some datas based on a specific condition(by fun/loop/conditional/all)
const bookArr=[
    {bkname:"Js Fundamentals",Author:"A.sen",Published:2020},
    {bkname:"Pyscript",Author:"K.mitra",Published:2021},
    {bkname:"Docker-handler",Author:"k.mitra",Published:2019},
    {bkname:"Ts Fundamentals",Author:"P.K.Deb",Published:2020}
]
let bkpubarr=bookArr.filter((bk)=>bk.Published>2019 && bk.Author==="K.mitra")
console.log(bkpubarr);

// we can also nest map and filter functions (and reduce functions also, although we will do that less)

let nestedRes=myArr.map((item)=>item*5)
                    .filter((item)=>item>15)
console.log(nestedRes);

// Using Reduce
// Reduce , such a func which applies any other fun(mostly arithmatic) to generate a value from an array, inshort it reduces it
// It takes two params : accumulator (acc) -> a value which will use in the operation in first step
//                   and currentvalue (currval) -> a value which will get genrated from the array-vals and acc-val by that operation
let getResult=myArr.reduce((acc,currval)=>{
    return acc+currval;
},0)
console.log(getResult);
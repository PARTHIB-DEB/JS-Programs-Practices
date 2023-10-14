// This file contains about ways to merge arrays into a single array
const firstArr = ["Parthib",["IT","A",27],3,5,6,100.0]
const secArr = ["1090","1091","1092","2091","2092"]
console.log(firstArr)
console.log(secArr)
// Simple append or Push ( in the samw way we can add in the begining)
// // //firstArr.push(secArr)
// // //console.log(firstArr)
// Simple concat / Merge 2 arrays in a 3rd array
// // //const mergedThird = firstArr.concat(secArr)
// // //console.log(mergedThird);
// By using ...(epsilion)/spread operator
// // //const epsiMerg=[...firstArr,...secArr]
// // //console.log(epsiMerg);
// By using flat operator (Unlike other operators , It just convert the array into a 1D array if it is not 1D , so it takes a 'depths' or 'dimension' argument upto which it will find the subarrays)
// // //const flatFirst = firstArr.flat(Infinity)
// // //console.log(firstArr);
// // //console.log(flatFirst);
// If we want to create an array from individual elements , at once!!
// // //let x=10,y=20,z=30
// // //console.log(Array.of(x,y,z))
// If we want to create an array from value of anyother datatype (must be iterable)
// // //let myStr = "Parthib"
// // //console.log(Array.from(myStr));
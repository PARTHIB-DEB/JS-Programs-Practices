// There are basically three types of loops : for , while , do-while

// classic for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// while loop
// while (condition) {
    
// }

//do-while loop
// do {
    
// } while (condition);

// although these 3 loops are enough to iterate but there are more loops, specifically more variants of 'for' loops
// for specific types of data

// for-of loop

const myArr=[1,2,3,4,5]
const myStr="Parthib"
const myMap = new Map()
myMap.set('IN','India') // returns an array ['IN','India']
myMap.set('CPP','Cplusplus') // returns another array ['CPP','Cplusplus']
console.log(myMap);
for (const val of myArr) {
    console.log(val);
}
for (const chr of myStr) {
    console.log(chr);
}
for (const [key,value] of myMap) {
    console.log(`${key}->${value}`);
}

//for-in loop(for Objects,arrays but not for 'Map')
const myobj={
    "name":"Parthib",
    "skill":"Webdev"
}
for (const key in myobj) {
    console.log(`${key}:${myobj[key]}`);
}
for (const key in myArr) { // keys for arrays are their indexes
    console.log(`${key}:${myArr[key]}`);
}

//for-each loop (higher-order loop -> arrays,maps) 
// for-each loop does not return anything or return undefined (EXPLICITLY can return)
myMap.forEach( function(value){ // call-back function -> function has no name
    console.log(value)
})

myArr.forEach( (value)=>{
    console.log(value);
})
// In Js, Array is a list of elements (same or different), bounded in a square bracket
// In js, there is no fixed size of array, size is not constant even though user make the array as 'const'
// Like Number and Strings there are 2 ways to declare an array
const myArr = [1,2,1,'55ab','Parthib',"^#*#)#_",[11,12,13,14,15],{"Address":"Agarpara"}]
const myArr2 = new Array(
    1,2,1,'55ab','Parthib',"^#*#)#_",[11,12,13,14,15],{"Address":"Agarpara"}
)
// console.table([['myArr',myArr],['myArr2',myArr2]])
console.log(`Array Length is ${myArr.length}`)
console.log(`ArrayString: ${myArr.join(" ")}`)
console.log(`Does "55ab" includes in array: ${myArr.includes("55ab")}`)
// console.log(`Does "55ab" includes in array: ${myArr.indexOf('[11,12,13,14,15]')}`) // showing -1 as index , not true
/*
Promises are also an Object in JS

Its Async in nature , means -> After a promise is made , untill it is being fullfilled/rejected , some task will do happen (reducing CPU's idle time)

This object has come (along with Fetch Api , Async-Await) to reduce the way of content management using Different rewuest method in web

In real life Promises - Either it get RESOLVED(Fulfilled) (at a time more or less that the promise made) OR get REJECTED (after some time from promise made)

Same happens in JS : Promise object has two states - Resolve and Reject - Btw these two are actually functions used to pass argument

Funfact : Its a corollary of try-catch-throw-finally in JS (because it is also there) , specially made for Web scrapping

But how this RESOLVE or REJECTtion of Promise will take place ??
(See in Code)
*/

// Unchained Syntax
let myProm = new Promise(function (Resolve , Reject) {
    console.log("Promise loaded and waiting for....")
    setTimeout(()=>{
        let data =Math.floor(Math.random()*10)
        if (data >= 1) {
            Resolve(data) // data is just the name so it can pass any thing from primitive datatypes to OBJECTs, ARRAYS also
        }
        else{
            Reject(data) // data is just the name so it can pass any thing from primitive datatypes to OBJECTs, ARRAYS also
        }
    },2000)
}) // Creating a promise -> takes a CALLBACK function (nameless function) which have these two RESOLVE , REJECT args
myProm.then((data)=>{
    return data
}) // If promise got RESOLVEed then then() clause works
.then((data)=>{
    console.log(`RESOLVED : As the data is ${data}`)
}). // Can make chain of then clauses -> making the promise THENable
catch((err)=>{
    console.log(`REJECTED : As the data is ${err}`)
}) // If promise got rejected , obviously due to ERROR , catch() clause handles that
.finally(()=>{
    console.log("Varr me jae promise , ye task to hoga hi hoga FINALLY")
}) // If there is any task that doesnot depend on the promise' state , must put here

/*
What is the importance of the 2nd then() clause ?? why it is necessary ??
>> The 1st then() clause is used to get the data from the resolve fn/state of promise
>> But - as it is a modern version of try-catch so , the first catch block will try to finc its 'try' block  and if it is not found , 
        the first catch block can not show the data or show a compilation error
    So we use the 2nd then() clause which will treat the 1st then() clause as 'try' block and if the first 'try' block return the value which got from resolve state
    the 2nd one will accept that and show it or do any operations in it
*/

// Chanied Syntax
new Promise(function (Resolve , Reject) {
    console.log("Promise loaded and waiting for....")
    setTimeout(()=>{
        let data =Math.floor(Math.random()*10)
        if (data >= 1) {
            Resolve(data)
        }
        else{
            Reject(data)
        }
    },2000)
}).then((data)=>{
    return data
}).then((data)=>{
    console.log(`RESOLVED : As the data is ${data}`)
}).catch((err)=>{
    console.log(`REJECTED : As the data is ${err}`)
}).finally(()=>{
    console.log("Varr me jae promise , ye task to hoga hi hoga FINALLY")
})
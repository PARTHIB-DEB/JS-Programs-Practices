/* 
Inside 'Fetch' or 'Promises' or 'Async-await' we do some tasks then takes some time
'Fetch' api internally creats a promise when it is used to get data from an URL
So based on the state of the promise , either response got by .then() clause or error caught by .catch() clause

Basically fetch() api is the modern alternative of XMLHttprequest and become sole-part of JS after ES6
For more about Fetch api , follow MDN : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/


fetch("https://api.github.com/users/PARTHIB-DEB")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.table([data.login , data.bio])
}).catch((err)=>{
    console.log(`Error occured : ${err}`)
})
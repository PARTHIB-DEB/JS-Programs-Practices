/*
Async-Await : Its work also more or less same with promises accept that it disrupts the control from by making the CPU 'await'
If any fuction is async is nature that means that function is doing some thing(like accepting some info from network) which may take more time
so that task inside the function must be used by adding precededing 'await' keyword

Another difference is : Async-await does not have primitive support of try-catch , so we havr to explicitly use those clause
actually all these async-await , fetch , promise are used in a overlapped manner just to manage the tasks in the EVENT-LOOP

Async-await works on promies (because promises is itself such a object/task which may happen now or later on or get rejected)
*/

const oldProm = new Promise(function (Resolve , Reject) {
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
})
async function task() {
    // const data = await oldProm
    //console.log(data) // we can't see the data for the same reason why we used 2-times then() clause in promises
    try {
        const data = await oldProm
        console.log(`RESOLVED : As the data is ${data}`)
    } catch (error) {
        console.log(`REJECTED : As the data is ${error}`)
    }finally{
        console.log("Varr me jae promise , ye task to hoga hi hoga FINALLY")
    }
}

task()
// Getter - Setter are two inbuilt methods attached to each properties of a object
// We can redefine the definitions of these two functions
// Without setter , getter can not be defined so they should be redifned at a time in a PAIR

// Modern Way
// class person{
//     constructor(username,email){
//         this.username=username,
//         console.log(`Username parameter given in Constructor is : ${username}\n\n`);
//         console.log(`Constructor function -> Now Username is : ${this.username}\n\n`)
//         this.email=email
//     }

//     get username(){
//         console.log(`Getter called  : Username is ${this._username}\n\n`)
//     }

//     set username(username){  // More priority because first it get called before constructor function
//         this._username=username.toUpperCase()
//         console.log(`Setter Function called , username set to ${this._username}\n\n`)
//     }

// }

// const pepObj=new person("parthib","pkd@pkd.com")
// pepObj.username


// Little old way (by function)
function person(username,email){
    this.username=username,
    console.log(`Username parameter given in Constructor is : ${username}\n\n`);
    console.log(`Constructor function -> Now Username is : ${this.username}\n\n`)
    this.email=email

    Object.defineProperty(this,'username',{
        get:function(){
            console.log(`Getter called  : Username is ${this.username}\n\n`)
        },

        set:function(username){
            this._username=username.toUpperCase()
            this.usename=this._username
            console.log(`Setter Function called , username set to ${this._username}\n\n`)
        }
    })
}

const pepObj=new person("parthib","pkd@pkd.com")
pepObj.username
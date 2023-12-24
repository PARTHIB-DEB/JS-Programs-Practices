// Getter - Setter are two inbuilt methods attached to each properties of a object
// We can redefine the definitions of these two functions
// Without setter , getter can not be defined so they should be redifned at a time in a PAIR

// Although there are 3 ways , most modern way is declared here

class person{
    constructor(username,email){
        this.username=username,
        console.log(`Username parameter given in Constructor is : ${username}\n\n`);
        console.log(`Constructor function -> Now Username is : ${this.username}\n\n`)
        this.email=email
    }

    get username(){
        console.log(`Getter called  : Username is ${this._username}\n\n`)
    }

    set username(username){  // More priority because first it get called before constructor function
        this._username=username.toUpperCase()+"1234"
        console.log(`Setter Function called , username set to ${this._username}\n\n`)
    }

}

const pepObj=new person("parthib","pkd@pkd.com")
pepObj.username


// For more 2 methods see hitesh sir's video : https://youtu.be/t6vLhF-iSxQ?si=bOMJYhhNGVWeCu8V
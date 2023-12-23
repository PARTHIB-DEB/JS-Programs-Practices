class parent{
    constructor(username){
        this.username=username
    }

    static createId(){
        console.log(`User ${this.username} got Id`)
    }
}

class child extends parent{
    constructor(username,email){
        super(username),
        this.email=email
    }

    show(){
        return this
    }
}

const objChild = new child("parthib","pkd@pkd.com")
const response = objChild.show()
console.log(typeof response)
console.log(response)

parent.createId() // static function always of the class's propety , not the objects
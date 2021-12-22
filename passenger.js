const Person = require("./person")

class Passenger extends Person{
    constructor(name){
        super(name)
        this.role = "passenger"
    }
}

module.exports = Passenger;
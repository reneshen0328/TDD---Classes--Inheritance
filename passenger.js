const Person = require("./person")

class Passenger extends Person{
    constructor(name){
        super(name)
        this.role = "passenger"
        this.enterFirst = true
    }
}

class FirstClass extends Passenger{
    constructor(name,role,enterFirst){
        super(name,role,enterFirst)
        this.type = "First Class"
    }

    // enterFirst(){
    //     return true;
    // }
}

class Coach extends Passenger{
    constructor(name){
        super(name)
        this.enterFirst = false
        this.type = "Coach"
    }
}

class RicherCoach extends Coach{
    constructor(name){
        super(name)
        this.enterFirst = false
        this.type = "Richer coach"
    }

    chooseSeats(){
        return "I payed more for a better seat :)"
    }
}

class Elderly extends Coach{
    constructor(name,role,enterFirst){
        super(name,role,enterFirst)
        this.type = "Elderly"
    }

    // enterFirst(){
    //     return true;
    // }
}

class FamilyWithKids extends Coach{
    constructor(name,role,enterFirst){
        super(name,role,enterFirst)
        this.type = "Family with kids under 2"
    }

    // enterFirst(){
    //     return true;
    // }
}

module.exports = {Passenger,RicherCoach,Coach,FirstClass,Elderly,FamilyWithKids}
const Person = require("./person")

class Crew extends Person {
    constructor(name,role,type){
        super(name)
        this.type = "type"
        this.role = "Crew"
    }
    
}

class FlightCrew extends Crew {
    constructor(name,role,type){
        super(name,role)
        this.type = "Flight Team"
    }
}

class GroundCrew extends Crew {
    constructor(name,role,type){
        super(name,role)
        this.type = "Ground Team"
    }
}

module.exports = {Crew,FlightCrew,GroundCrew};
const Person = require("./person")
const {Crew,FlightCrew,GroundCrew} = require("./crew")

describe ('Crew Class', () => {
    const flightCrew = new FlightCrew('Flight Team');
    const groundCrew = new GroundCrew('Ground Team')

    console.log(FlightCrew)

    test('is a crew',  () => {
        expect (flightCrew.type).toBe('Flight Team');

    })

})
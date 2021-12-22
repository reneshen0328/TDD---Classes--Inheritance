const Person = require("./person")
const {Crew,FlightCrew,GroundCrew} = require("./crew");
const Passenger = require("./passenger");

describe ('Crew Class', () => {
    const flightCrew = new FlightCrew('A type of crew');
    const groundCrew = new GroundCrew('Ground Team')

    test('is a flight crew',  () => {
        expect (flightCrew.type).toBe('Flight Team');
    })

    test("is a ground crew", ()=>{
        const stanley = new GroundCrew("Stanley")

        expect(stanley.luggage()).toBe(`Handle ${Passenger.name} luggage`)
        expect(stanley instanceof Person).toBe(true)
        expect(stanley instanceof Crew).toBe(true)
        expect(stanley instanceof GroundCrew).toBe(true)
    })
})

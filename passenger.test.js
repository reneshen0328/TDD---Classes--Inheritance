const Person = require("./person")
const {Passenger,RicherCoach,Coach,FirstClass,Elderly,FamilyWithKids} = require("./passenger")

describe ('Passenger',() => {

    const jeff = new Person("Jeff");
    const rene = new FirstClass("Rene")

    test('has name', () => {
        expect(jeff.name).toBe('Jeff')
    })

    test("can enter plane earlier",()=>{
        expect(rene.enterFirst).toBeTruthy()
    })
})
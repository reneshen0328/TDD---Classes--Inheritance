const Person = require("./person")
const Passenger = require("./passenger")

describe ('Passenger',() => {

    const jeff = new Person("Jeff");

    test('has name', () => {
        expect(jeff.name).toBe('Jeff')
    })
})
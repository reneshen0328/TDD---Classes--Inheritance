const { TestWatcher } = require("jest")
const Person = require("./person")

describe('Person Class', () => {

	const person1 = new Person('Stanley',"pilot");

	test('has a name', () => {
		expect(person1.name).toBe('Stanley');
	})
})
const Ship = require("../src/ship");

describe("ship", () => {
	//
	it("produces an ship object with the rigth length", () => {
		expect(Ship(0).length).toEqual(0);
		expect(Ship(5).length).toEqual(5);
	});

	test("instantiates with hits prop being an array of 0s", () => {
		expect(Ship(0).hits).toEqual([]);
		expect(Ship(2).hits).toEqual([0, 0]);
	});

	test("hit(n) works correctly", () => {
		const ship = Ship(1);
		ship.hit(0);
		ship.hit(-1);
		ship.hit(1);
		expect(ship.hits).toEqual([1]);
	});

	test("isSunk() works correctly", () => {
		const ship = Ship(1);
		ship.hit(0);
		expect(ship.isSunk()).toBe(true);
	});
});

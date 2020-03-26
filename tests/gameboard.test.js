const Gameboard = require("../src/gameboard");

describe("gameboard", () => {
	//
	it("adds a new ship - 1 segment", () => {
		const gameboard = Gameboard(1);
		gameboard.placeShip("a", 1, 1, "horizontal");
		expect(gameboard.cells.A1.segment).toEqual(0);
		expect(gameboard.cells).toMatchObject({ A1: { segment: 0 } });
		expect(gameboard.cells.A1.ship).toMatchSnapshot();
	});

	it("doesn't add a ship if it sticks out of the board", () => {
		const gameboard = Gameboard(1);
		expect(() => gameboard.placeShip("a", 2, 1, "horizontal")).toThrow();
		expect(() => gameboard.placeShip("b", 1, 1, "horizontal")).toThrow();
	});

	it("adds a new ship - multiple segments", () => {
		let gameboard = Gameboard(2);
		gameboard.placeShip("a", 1, 2, "horizontal");
		expect(gameboard.cells.A1.segment).toEqual(0);
		expect(gameboard.cells.B1.segment).toEqual(1);

		gameboard = Gameboard(2);
		gameboard.placeShip("a", 1, 2, "vertical");
		expect(gameboard.cells.A1.segment).toEqual(0);
		expect(gameboard.cells.A2.segment).toEqual(1);
	});

	it("doesn't add a ship that starts on an existing field", () => {
		const gameboard = Gameboard(1);
		gameboard.placeShip("a", 1, 1, "horizontal");
		expect(() => gameboard.placeShip("a", 1, 1, "horizontal")).toThrow();
	});

	it("doesn't add a ship that passes through an existing field", () => {
		const gameboard = Gameboard(3);
		gameboard.placeShip("b", 2, 1, "horizontal");
		expect(() => gameboard.placeShip("b", 1, 3, "horizontal")).toThrow();
	});

	it("rejects an illegally placed ship before saving any cells", () => {
		const gameboard = Gameboard(2);
		gameboard.placeShip("b", 1, 1, "horizontal");
		expect(() => gameboard.placeShip("a", 1, 2, "horizontal")).toThrow();
		expect(gameboard.cells.A1).toBe(null);
	});

	it("recieves an attack", () => {
		const gameboard = Gameboard(1);
		gameboard.placeShip("a", 1, 1, "horizontal");
		gameboard.receiveAttack("A1");
		expect(gameboard.cells.A1.hit).toEqual(true);
	});

	it("saves a miss", () => {
		const gameboard = Gameboard(1);
		gameboard.receiveAttack("A1");
		expect(gameboard.cells.A1).toEqual("miss");
	});

	it("knows when all ships are sunk", () => {
		const gameboard = Gameboard(1);
		gameboard.placeShip("a", 1, 1, "horizontal");
		gameboard.receiveAttack("A1");
		expect(gameboard.areAllShipsSunk()).toEqual(true);
	});
});
